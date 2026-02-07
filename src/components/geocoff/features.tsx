import {
  Layers,
  ScanSearch,
  BarChart3,
  Globe2,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Subsurface Modeling",
    description:
      "Build precise 3D models of geological formations with multi-layer analysis and real-time rendering.",
  },
  {
    icon: ScanSearch,
    title: "Anomaly Detection",
    description:
      "AI-powered scanning identifies geological anomalies and mineral deposits with industry-leading accuracy.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw geological data into clear visualizations. Generate reports with a single click.",
  },
  {
    icon: Globe2,
    title: "Global Mapping",
    description:
      "Access high-resolution terrain data from anywhere on Earth, integrated with satellite imagery.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description:
      "Process terabytes of geospatial data in minutes. Our cloud infrastructure scales with your needs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption. Your proprietary geological data stays secure.",
  },
];

export function Features() {
  return (
    <section id="product" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-background/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Precision tools for every layer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            From surface mapping to deep subsurface analysis, Geooff gives you
            the complete toolkit for geological exploration.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 transition-colors hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
