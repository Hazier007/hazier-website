"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidEtherProps {
  colors?: string[];
  className?: string;
  style?: React.CSSProperties;
  mouseForce?: number;
  cursorSize?: number;
  resolution?: number;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
}

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  resolution = 0.5,
  colors = ['#F5911E', '#FF6B00', '#1a1a1a'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
}: LiquidEtherProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const webglRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!mountRef.current) return;

    function makePaletteTexture(stops: string[]) {
      const arr = stops.length > 1 ? stops : [stops[0], stops[0]];
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const bgVec4 = new THREE.Vector4(0, 0, 0, 0);
    const container = mountRef.current;

    // Common
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let rect = container.getBoundingClientRect();
    let width = Math.max(1, Math.floor(rect.width));
    let height = Math.max(1, Math.floor(rect.height));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.autoClear = false;
    renderer.setClearColor(new THREE.Color(0x000000), 0);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.prepend(renderer.domElement);

    const clock = new THREE.Clock();
    clock.start();

    // Mouse
    const mouseCoords = new THREE.Vector2();
    const mouseOld = new THREE.Vector2();
    const mouseDiff = new THREE.Vector2();
    let mouseMoved = false;
    let mouseTimer: ReturnType<typeof setTimeout> | null = null;
    let autoActive = true;
    const autoCurrent = new THREE.Vector2(0, 0);
    const autoTarget = new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
    let autoLastTime = performance.now();

    function onMouseMove(e: MouseEvent) {
      const r = container.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return;
      mouseCoords.set(nx * 2 - 1, -(ny * 2 - 1));
      mouseMoved = true;
      autoActive = false;
      if (mouseTimer) clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => { mouseMoved = false; autoActive = true; }, 3000);
    }
    window.addEventListener('mousemove', onMouseMove);

    // Shaders
    const face_vert = `attribute vec3 position;uniform vec2 px;uniform vec2 boundarySpace;varying vec2 uv;precision highp float;void main(){vec3 pos=position;vec2 scale=1.0-boundarySpace*2.0;pos.xy=pos.xy*scale;uv=vec2(0.5)+(pos.xy)*0.5;gl_Position=vec4(pos,1.0);}`;
    const mouse_vert = `precision highp float;attribute vec3 position;attribute vec2 uv;uniform vec2 center;uniform vec2 scale;uniform vec2 px;varying vec2 vUv;void main(){vec2 pos=position.xy*scale*2.0*px+center;vUv=uv;gl_Position=vec4(pos,0.0,1.0);}`;
    const advection_frag = `precision highp float;uniform sampler2D velocity;uniform float dt;uniform bool isBFECC;uniform vec2 fboSize;uniform vec2 px;varying vec2 uv;void main(){vec2 ratio=max(fboSize.x,fboSize.y)/fboSize;if(isBFECC==false){vec2 vel=texture2D(velocity,uv).xy;vec2 uv2=uv-vel*dt*ratio;vec2 newVel=texture2D(velocity,uv2).xy;gl_FragColor=vec4(newVel,0.0,0.0);}else{vec2 spot_new=uv;vec2 vel_old=texture2D(velocity,uv).xy;vec2 spot_old=spot_new-vel_old*dt*ratio;vec2 vel_new1=texture2D(velocity,spot_old).xy;vec2 spot_new2=spot_old+vel_new1*dt*ratio;vec2 error=spot_new2-spot_new;vec2 spot_new3=spot_new-error/2.0;vec2 vel_2=texture2D(velocity,spot_new3).xy;vec2 spot_old2=spot_new3-vel_2*dt*ratio;vec2 newVel2=texture2D(velocity,spot_old2).xy;gl_FragColor=vec4(newVel2,0.0,0.0);}}`;
    const color_frag = `precision highp float;uniform sampler2D velocity;uniform sampler2D palette;uniform vec4 bgColor;varying vec2 uv;void main(){vec2 vel=texture2D(velocity,uv).xy;float lenv=clamp(length(vel),0.0,1.0);vec3 c=texture2D(palette,vec2(lenv,0.5)).rgb;vec3 outRGB=mix(bgColor.rgb,c,lenv);float outA=mix(bgColor.a,1.0,lenv);gl_FragColor=vec4(outRGB,outA);}`;
    const divergence_frag = `precision highp float;uniform sampler2D velocity;uniform float dt;uniform vec2 px;varying vec2 uv;void main(){float x0=texture2D(velocity,uv-vec2(px.x,0.0)).x;float x1=texture2D(velocity,uv+vec2(px.x,0.0)).x;float y0=texture2D(velocity,uv-vec2(0.0,px.y)).y;float y1=texture2D(velocity,uv+vec2(0.0,px.y)).y;float divergence=(x1-x0+y1-y0)/2.0;gl_FragColor=vec4(divergence/dt);}`;
    const externalForce_frag = `precision highp float;uniform vec2 force;uniform vec2 center;uniform vec2 scale;uniform vec2 px;varying vec2 vUv;void main(){vec2 circle=(vUv-0.5)*2.0;float d=1.0-min(length(circle),1.0);d*=d;gl_FragColor=vec4(force*d,0.0,1.0);}`;
    const poisson_frag = `precision highp float;uniform sampler2D pressure;uniform sampler2D divergence;uniform vec2 px;varying vec2 uv;void main(){float p0=texture2D(pressure,uv+vec2(px.x*2.0,0.0)).r;float p1=texture2D(pressure,uv-vec2(px.x*2.0,0.0)).r;float p2=texture2D(pressure,uv+vec2(0.0,px.y*2.0)).r;float p3=texture2D(pressure,uv-vec2(0.0,px.y*2.0)).r;float div=texture2D(divergence,uv).r;float newP=(p0+p1+p2+p3)/4.0-div;gl_FragColor=vec4(newP);}`;
    const pressure_frag = `precision highp float;uniform sampler2D pressure;uniform sampler2D velocity;uniform vec2 px;uniform float dt;varying vec2 uv;void main(){float step=1.0;float p0=texture2D(pressure,uv+vec2(px.x*step,0.0)).r;float p1=texture2D(pressure,uv-vec2(px.x*step,0.0)).r;float p2=texture2D(pressure,uv+vec2(0.0,px.y*step)).r;float p3=texture2D(pressure,uv-vec2(0.0,px.y*step)).r;vec2 v=texture2D(velocity,uv).xy;vec2 gradP=vec2(p0-p1,p2-p3)*0.5;v=v-gradP*dt;gl_FragColor=vec4(v,0.0,1.0);}`;

    // FBO setup
    const fboW = Math.max(1, Math.round(resolution * width));
    const fboH = Math.max(1, Math.round(resolution * height));
    const cellScale = new THREE.Vector2(1 / fboW, 1 / fboH);
    const fboSize = new THREE.Vector2(fboW, fboH);
    const floatType = THREE.FloatType;
    const fboOpts = { type: floatType, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping };

    const vel0 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const vel1 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const div = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const p0 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);
    const p1 = new THREE.WebGLRenderTarget(fboW, fboH, fboOpts);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const geo = new THREE.PlaneGeometry(2, 2);

    // Advection pass
    const advMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: advection_frag, uniforms: { boundarySpace: { value: cellScale }, px: { value: cellScale }, fboSize: { value: fboSize }, velocity: { value: vel0.texture }, dt: { value: 0.014 }, isBFECC: { value: true } } });
    const advMesh = new THREE.Mesh(geo, advMat);

    // External force
    const forceScene = new THREE.Scene();
    const forceMat = new THREE.RawShaderMaterial({ vertexShader: mouse_vert, fragmentShader: externalForce_frag, blending: THREE.AdditiveBlending, depthWrite: false, uniforms: { px: { value: cellScale }, force: { value: new THREE.Vector2() }, center: { value: new THREE.Vector2() }, scale: { value: new THREE.Vector2(cursorSize, cursorSize) } } });
    const forceMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), forceMat);
    forceScene.add(forceMesh);

    // Divergence
    const divMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: divergence_frag, uniforms: { boundarySpace: { value: cellScale }, velocity: { value: vel1.texture }, px: { value: cellScale }, dt: { value: 0.014 } } });
    const divMesh = new THREE.Mesh(geo, divMat);

    // Poisson
    const poisMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: poisson_frag, uniforms: { boundarySpace: { value: cellScale }, pressure: { value: p0.texture }, divergence: { value: div.texture }, px: { value: cellScale } } });
    const poisMesh = new THREE.Mesh(geo, poisMat);

    // Pressure
    const presMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: pressure_frag, uniforms: { boundarySpace: { value: cellScale }, pressure: { value: p0.texture }, velocity: { value: vel1.texture }, px: { value: cellScale }, dt: { value: 0.014 } } });
    const presMesh = new THREE.Mesh(geo, presMat);

    // Color output
    const colorMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: color_frag, transparent: true, depthWrite: false, uniforms: { velocity: { value: vel0.texture }, boundarySpace: { value: new THREE.Vector2() }, palette: { value: paletteTex }, bgColor: { value: bgVec4 } } });
    const colorMesh = new THREE.Mesh(geo, colorMat);
    scene.add(colorMesh);

    function renderPass(mesh: THREE.Mesh, target: THREE.WebGLRenderTarget | null) {
      const s = new THREE.Scene();
      s.add(mesh);
      renderer.setRenderTarget(target);
      renderer.render(s, camera);
      renderer.setRenderTarget(null);
      s.remove(mesh);
    }

    let running = true;
    function loop() {
      if (!running) return;

      // Auto demo
      if (autoActive && autoDemo) {
        const now = performance.now();
        const dtSec = Math.min((now - autoLastTime) / 1000, 0.1);
        autoLastTime = now;
        const dir = autoTarget.clone().sub(autoCurrent);
        if (dir.length() < 0.05) {
          autoTarget.set(Math.random() * 1.6 - 0.8, Math.random() * 1.6 - 0.8);
        } else {
          dir.normalize();
          autoCurrent.addScaledVector(dir, autoSpeed * dtSec);
          mouseCoords.copy(autoCurrent);
          mouseMoved = true;
        }
      }

      // Mouse diff
      mouseDiff.subVectors(mouseCoords, mouseOld);
      mouseOld.copy(mouseCoords);
      if (autoActive) mouseDiff.multiplyScalar(autoIntensity);

      // Advection
      advMat.uniforms.velocity.value = vel0.texture;
      renderPass(advMesh, vel1);

      // External force
      const fx = (mouseDiff.x / 2) * mouseForce;
      const fy = (mouseDiff.y / 2) * mouseForce;
      forceMat.uniforms.force.value.set(fx, fy);
      forceMat.uniforms.center.value.set(mouseCoords.x, mouseCoords.y);
      renderer.setRenderTarget(vel1);
      renderer.render(forceScene, camera);
      renderer.setRenderTarget(null);

      // Divergence
      divMat.uniforms.velocity.value = vel1.texture;
      renderPass(divMesh, div);

      // Poisson iterations
      for (let i = 0; i < 32; i++) {
        const pIn = i % 2 === 0 ? p0 : p1;
        const pOut = i % 2 === 0 ? p1 : p0;
        poisMat.uniforms.pressure.value = pIn.texture;
        renderPass(poisMesh, pOut);
      }

      // Pressure
      presMat.uniforms.velocity.value = vel1.texture;
      presMat.uniforms.pressure.value = p0.texture;
      renderPass(presMesh, vel0);

      // Output
      colorMat.uniforms.velocity.value = vel0.texture;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      rafRef.current = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      if (mouseTimer) clearTimeout(mouseTimer);
      const canvas = renderer.domElement;
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      renderer.dispose();
    };
  }, [colors, mouseForce, cursorSize, resolution, autoDemo, autoSpeed, autoIntensity]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        touchAction: 'none',
        ...style,
      }}
    />
  );
}
