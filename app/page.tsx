import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Formation from "@/components/Formation";
import Curriculum from "@/components/Curriculum";
import Founder from "@/components/Founder";
import TurmaFundadora from "@/components/TurmaFundadora";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-bg-main)", minHeight: "100vh", overflowX: "hidden", paddingTop: 0 }}>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Formation />
      <Solutions />
      <Curriculum />
      <Founder />
      <TurmaFundadora />
      <FAQ />
      <Footer />
    </main>
  );
}
