import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Formation from "@/components/Formation";
import Founder from "@/components/Founder";
import HowItWorks from "@/components/HowItWorks";
import TurmaFundadora from "@/components/TurmaFundadora";
import ForWho from "@/components/ForWho";
import Guarantee from "@/components/Guarantee";
import CTAIngresso from "@/components/CTAIngresso";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-bg-main)", minHeight: "100vh", overflowX: "hidden", paddingTop: 0 }}>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <PainPoints />
      <About />
      <Solutions />
      <Founder />
      <HowItWorks />
      <Formation />
      <TurmaFundadora />
      <ForWho />
      <CTAIngresso />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
