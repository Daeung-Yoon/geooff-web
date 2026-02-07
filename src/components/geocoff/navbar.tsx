"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GeooffLogo } from "./logo";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2" aria-label="Geooff Home">
          <GeooffLogo className="h-14 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button className="inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </button>
          <button className="inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>

        <button
          type="button"
          className="text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <button className="inline-flex items-center justify-start rounded-md h-9 px-3 text-sm font-medium text-muted-foreground">
                Log in
              </button>
              <button className="inline-flex items-center justify-center rounded-md h-9 px-3 text-sm font-medium bg-primary text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
