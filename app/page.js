import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Trust from "@/components/Trust";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Trust />
      <CTAForm source="homecare-insurance" />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
