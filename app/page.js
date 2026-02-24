import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <CTAForm source="homecare-insurance" />
      <Footer />
      <StickyCTA />
    </main>
  );
}
