import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(174, 62%, 55%, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Ready to see beyond the surface?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Join thousands of geoscientists and engineers who trust Geooff for
          their most critical exploration and analysis projects.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-md h-11 px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2 shadow-lg">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center rounded-md h-11 px-8 text-sm font-medium border border-border text-foreground hover:bg-secondary bg-background/40 backdrop-blur-sm transition-colors">
            Contact Sales
          </button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required. 14-day free trial with full access.
        </p>
      </div>
    </section>
  );
}
