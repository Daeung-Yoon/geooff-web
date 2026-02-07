import { StrataBackground } from "@/components/geocoff/strata-background";
import { StrataLayers } from "@/components/geocoff/strata-layers";
import { Navbar } from "@/components/geocoff/navbar";
import { Hero } from "@/components/geocoff/hero";
import { Features } from "@/components/geocoff/features";
import { Stats } from "@/components/geocoff/stats";
import { Solutions } from "@/components/geocoff/solutions";
import { CTA } from "@/components/geocoff/cta";
import { Footer } from "@/components/geocoff/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StrataBackground />
      <StrataLayers />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Solutions />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
