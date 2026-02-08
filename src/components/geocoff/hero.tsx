"use client";

import { ArrowRight } from "lucide-react";
import { StrataVisual } from "./strata-visual";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-20">
        {/* Left: Text content */}
        <div className="flex max-w-xl flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Now in Public Beta
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance drop-shadow-lg">
            <span className="font-mono text-yellow-400">See Beyond</span>{" "}
            <span className="text-primary">the Surface</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty drop-shadow-md">
            Advanced geospatial analysis for subsurface mapping, geological modeling, and precision exploration. Turn complex geological data into clear, actionable insights.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-md h-11 px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2 shadow-lg">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center rounded-md h-11 px-8 text-sm font-medium border border-border text-foreground hover:bg-secondary bg-background/40 backdrop-blur-sm transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground drop-shadow-md">10K+</span>
              <span>Active Users</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground drop-shadow-md">50M+</span>
              <span>Data Points</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground drop-shadow-md">99.9%</span>
              <span>Uptime</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative flex-1">
          <StrataVisual />
        </div>
      </div>
    </section>
  );
}
