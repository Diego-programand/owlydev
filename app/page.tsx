import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Demos from "@/sections/Demos";
import Contact from "@/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#16263a]">
      <Navbar />
      <Hero />
      <Services />
      <Demos />
      <Contact />
      <Footer />
    </main>
  );
}
