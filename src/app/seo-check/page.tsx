'use client';

import React, { useState } from 'react';
import { ChevronRightIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

// Metadata is exported from a separate layout file since this is a client component
// See src/app/seo-check/layout.tsx

interface SeoCheckResult {
  score: number;
  url: string;
  issues: string[];
  passed: string[];
  pageTitle?: string;
  metaDescription?: string;
  pageSpeed: number;
  mobileFriendly: boolean;
  hasH1: boolean;
  headings: {
    h1: number;
    h2: number;
    h3: number;
  };
  images: {
    total: number;
    withoutAlt: number;
  };
}

export default function SeoCheckPage() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SeoCheckResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/seo-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F5911E] to-yellow-400 bg-clip-text text-transparent">
              Gratis SEO Health Check
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ontdek in 30 seconden hoe jouw website scoort op SEO. 
              Krijg direct concrete tips om hoger te ranken in Google.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-green-400" />
                Technische SEO analyse
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-green-400" />
                Snelheidstest
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-green-400" />
                Mobile check
              </span>
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-green-400" />
                Content analyse
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-slate-300 mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://jouwwebsite.be"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5911E] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email (optioneel - voor gedetailleerd rapport)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jouw@email.be"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5911E] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#F5911E] to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-[#E8851B] hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Website analyseren...
                    </>
                  ) : (
                    <>
                      Gratis SEO Check starten
                      <ChevronRightIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Error */}
            {error && (
              <div className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                <p className="text-red-300">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            
            {/* Score Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getScoreBgColor(result.score)} mb-4`}>
                <span className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                  {result.score}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                SEO Score voor {new URL(result.url).hostname}
              </h2>
              <p className="text-slate-400">
                {result.score >= 80 && 'Uitstekend! Jouw website is goed geoptimaliseerd.'}
                {result.score >= 60 && result.score < 80 && 'Goed bezig, maar er zijn nog verbeterpunten.'}
                {result.score < 60 && 'Er is veel ruimte voor verbetering. Laten we aan de slag gaan!'}
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* What's Good */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6" />
                  Wat goed gaat ({result.passed.length})
                </h3>
                <div className="space-y-3">
                  {result.passed.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-green-100 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Issues */}
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Verbeterpunten ({result.issues.length})
                </h3>
                <div className="space-y-3">
                  {result.issues.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                      <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-100 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#F5911E]">{result.pageSpeed}</div>
                <div className="text-sm text-slate-400">Snelheid Score</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#F5911E]">{result.headings.h1 + result.headings.h2}</div>
                <div className="text-sm text-slate-400">Headings</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#F5911E]">{result.images.total}</div>
                <div className="text-sm text-slate-400">Afbeeldingen</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#F5911E]">
                  {result.images.total > 0 ? Math.round(((result.images.total - result.images.withoutAlt) / result.images.total) * 100) : 0}%
                </div>
                <div className="text-sm text-slate-400">Alt Text</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center p-6 bg-gradient-to-r from-[#F5911E]/10 to-yellow-500/10 rounded-lg border border-[#F5911E]/20">
              <h3 className="text-xl font-semibold mb-2">Wil je professionele hulp?</h3>
              <p className="text-slate-300 mb-4">
                Onze SEO experts kunnen jouw score naar 90+ brengen en je traffic verdubbelen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-[#F5911E] to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-[#E8851B] hover:to-yellow-600 transition-all duration-200"
                >
                  Gratis SEO Audit Aanvragen
                </a>
                <a
                  href="/diensten"
                  className="bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-all duration-200"
                >
                  Onze SEO Diensten
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}