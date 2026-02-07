"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const solutions = [
  {
    id: "exploration",
    title: "Mineral Exploration",
    subtitle: "Precision targeting for discovery",
    description:
      "Identify high-potential mineral deposits before breaking ground. Our AI algorithms analyze geological formations, geochemical signatures, and historical data to pinpoint the most promising exploration targets.",
    points: [
      "Reduce drill targeting costs by up to 40%",
      "Multi-parameter anomaly detection",
      "Integrated geochemical and geophysical analysis",
      "Automated prospect ranking and scoring",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Planning",
    subtitle: "Build on solid ground",
    description:
      "Make critical infrastructure decisions backed by comprehensive subsurface intelligence. From tunneling to foundation engineering, understand what lies beneath before you build.",
    points: [
      "3D subsurface modeling for construction sites",
      "Risk assessment for ground stability",
      "Water table and aquifer mapping",
      "Regulatory compliance documentation",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Monitoring",
    subtitle: "Track what matters",
    description:
      "Monitor environmental changes at geological timescales and in real-time. Track groundwater contamination, land subsidence, and geological hazards with precision instrumentation and analytics.",
    points: [
      "Real-time groundwater quality tracking",
      "Land subsidence monitoring and alerts",
      "Historical change analysis over decades",
      "Automated environmental reporting",
    ],
  },
];

export function Solutions() {
  const [activeTab, setActiveTab] = useState("exploration");
  const activeSolution = solutions.find((s) => s.id === activeTab) ?? solutions[0];

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Solutions
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Purpose-built for geoscience
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Tailored workflows for every geological discipline, from mineral
            exploration to environmental compliance.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Tabs */}
          <div className="flex flex-row gap-2 lg:w-72 lg:flex-col lg:gap-1">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                type="button"
                onClick={() => setActiveTab(solution.id)}
                className={`flex-1 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors lg:flex-none ${
                  activeTab === solution.id
                    ? "bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
                }`}
              >
                <span className="block truncate">{solution.title}</span>
                <span className="mt-0.5 hidden text-xs font-normal opacity-70 lg:block">
                  {solution.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground">
              {activeSolution.title}
            </h3>
            <p className="mt-1 text-sm text-primary">{activeSolution.subtitle}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {activeSolution.description}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {activeSolution.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
