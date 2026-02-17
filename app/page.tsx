import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import Hero from "@/sections/Hero";
import ServiceIntro from "@/sections/ServicesIntro";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import WhyUs from "@/sections/WhyUs";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#16263a]">
      <Navbar />
      <Hero />
      <WhyUs />
      <ServiceIntro />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
