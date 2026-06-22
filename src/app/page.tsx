import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SubscribePopup from "@/components/SubscribePopup";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <SubscribePopup />
    </>
  );
}
