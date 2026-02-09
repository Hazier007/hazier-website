"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Diensten",
    href: "/diensten",
    dropdown: [
      { name: "SEO", href: "/diensten/seo", description: "Hoger in Google" },
      { name: "Webdesign", href: "/diensten/webdesign", description: "Moderne websites" },
      { name: "Programmatic SEO", href: "/diensten/programmatic-seo", description: "Schaalbare content" },
    ],
  },
  { name: "Cases", href: "/cases" },
  { name: "Prijzen", href: "/prijzen" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Hazier
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="flex items-center text-text-secondary hover:text-foreground transition-colors">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-text-secondary hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-64 rounded-lg bg-background-secondary border border-border shadow-lg z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-background-tertiary transition-colors"
                          >
                            <div className="font-medium text-foreground">
                              {dropdownItem.name}
                            </div>
                            <div className="text-sm text-text-secondary">
                              {dropdownItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Gratis SEO Audit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-foreground hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-background border-t border-border">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:text-foreground hover:bg-background-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block rounded-md px-3 py-2 text-sm text-text-tertiary hover:text-text-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-3 py-2">
            <Button className="w-full" asChild>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Gratis SEO Audit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}