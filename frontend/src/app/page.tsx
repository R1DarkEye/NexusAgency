import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Brands from "@/components/Brands/Brands";
import Services from "@/components/Services/Services";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <FeaturedWork />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
