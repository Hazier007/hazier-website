import pakkettenData from "@/data/pakketten.json";
import { getStripePriceId } from "@/lib/stripe/prices";

export type CheckoutMode = "payment" | "subscription";

export type CheckoutPackage = {
  key: string;
  name: string;
  mode: CheckoutMode;
  priceId?: string;
};

type PackageItem = {
  naam: string;
  periode: string;
  stripe_price_id?: string;
  contact_required?: boolean;
};

function modeFromPeriod(periode: string): CheckoutMode {
  return periode === "maand" ? "subscription" : "payment";
}

function buildCatalog() {
  const groups = [
    ["seo", pakkettenData.seo],
    ["webdesign", pakkettenData.webdesign],
    ["linkbuilding", pakkettenData.linkbuilding],
    ["addon", pakkettenData.addons],
  ] as const;

  return groups.flatMap(([prefix, items]) =>
    (items as PackageItem[])
      .filter((item) => item.stripe_price_id && !item.contact_required)
      .map((item) => ({
        key: `${prefix}:${item.stripe_price_id}`,
        name: `${prefix === "addon" ? "Add-on" : prefix} - ${item.naam}`,
        mode: prefix === "addon" ? "payment" : modeFromPeriod(item.periode),
        priceId: getStripePriceId(item.stripe_price_id as string),
      }))
  );
}

export function getCheckoutPackage(packageKey: string) {
  return buildCatalog().find((item) => item.key === packageKey) ?? null;
}
