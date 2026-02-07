const stats = [
  {
    value: "3x",
    label: "faster geological surveys",
    company: "Meridian Resources",
  },
  {
    value: "98%",
    label: "subsurface prediction accuracy",
    company: "Deep Core Analytics",
  },
  {
    value: "60%",
    label: "reduction in exploration costs",
    company: "Pacific Geosciences",
  },
  {
    value: "500+",
    label: "projects delivered worldwide",
    company: "Terra Dynamics",
  },
];

export function Stats() {
  return (
    <section className="relative border-y border-border/50 py-16 lg:py-20">
      <div className="absolute inset-0 bg-secondary/40 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-3 text-xs font-medium text-foreground/60">
                {stat.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
