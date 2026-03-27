export type StripePriceKey =
  | "price_seo_audit"
  | "price_seo_local"
  | "price_seo_full"
  | "price_webdesign_onepager"
  | "price_webdesign_business"
  | "price_webdesign_webshop"
  | "price_webdesign_onderhoud"
  | "price_linkbuilding_starter"
  | "price_linkbuilding_growth"
  | "price_linkbuilding_authority"
  | "price_addon_copywriting"
  | "price_addon_logo"
  | "price_addon_fotografie"
  | "price_addon_google_ads";

function readEnv(key: string): string | undefined {
  const v = process.env[key];
  if (!v) return undefined;
  const trimmed = v.trim();
  return trimmed.length ? trimmed : undefined;
}

/**
 * Map internal package price keys (from JSON) to real Stripe Price IDs.
 *
 * Price IDs are safe to expose as NEXT_PUBLIC_ env vars.
 */
export function getStripePriceId(key: string): string | undefined {
  switch (key) {
    case "price_seo_audit":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_SEO_AUDIT");
    case "price_seo_local":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_SEO_LOCAL");
    case "price_seo_full":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_SEO_FULL");

    case "price_webdesign_onepager":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_WEBDESIGN_ONEPAGER");
    case "price_webdesign_business":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_WEBDESIGN_BUSINESS");
    case "price_webdesign_webshop":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_WEBDESIGN_WEBSHOP");
    case "price_webdesign_onderhoud":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_WEBDESIGN_ONDERHOUD");

    case "price_linkbuilding_starter":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_LINKBUILDING_STARTER");
    case "price_linkbuilding_growth":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_LINKBUILDING_GROWTH");
    case "price_linkbuilding_authority":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_LINKBUILDING_AUTHORITY");

    case "price_addon_copywriting":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_ADDON_COPYWRITING");
    case "price_addon_logo":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_ADDON_LOGO");
    case "price_addon_fotografie":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_ADDON_FOTOGRAFIE");
    case "price_addon_google_ads":
      return readEnv("NEXT_PUBLIC_STRIPE_PRICE_ID_ADDON_GOOGLE_ADS");

    default:
      return undefined;
  }
}
