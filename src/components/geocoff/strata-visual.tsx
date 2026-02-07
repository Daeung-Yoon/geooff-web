import Image from "next/image";

export function StrataVisual() {
  return (
    <div className="relative">
      {/* Glow behind the card */}
      <div
        className="absolute -inset-4 rounded-2xl opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(174, 62%, 55%, 0.2) 0%, transparent 70%)",
        }}
      />
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-border/40 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 text-xs text-muted-foreground">Subsurface Analysis - Layer View</span>
        </div>

        {/* Brand image — bottom cropped to hide generation date */}
        <div className="relative aspect-[1/0.9] w-full overflow-hidden">
          <Image
            src="/geooff-brand.png"
            alt="Geooff - Precision. Insight. Simplicity."
            fill
            className="object-cover object-[center_45%]"
            priority
          />
        </div>

        {/* Data panel */}
        <div className="flex items-center gap-4 border-t border-border/40 bg-card px-4 py-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Depth</span>
            <span className="font-display text-sm font-semibold text-foreground">2,450m</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Layers</span>
            <span className="font-display text-sm font-semibold text-foreground">8</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Accuracy</span>
            <span className="font-display text-sm font-semibold text-primary">99.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
