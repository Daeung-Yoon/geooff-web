import { GeooffLogo } from "./logo";

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    heading: "Solutions",
    links: ["Exploration", "Infrastructure", "Environmental", "Research"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Case Studies"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Contact", "Privacy"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-16">
      <div className="absolute inset-0 bg-card/70 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Brand */}
          <div className="max-w-xs">
            <GeooffLogo className="h-12 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Precision. Insight. Simplicity. Advanced geospatial analysis tools
              for the modern geoscientist.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h4 className="text-sm font-semibold text-foreground">
                  {group.heading}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Geooff. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
