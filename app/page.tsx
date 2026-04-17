import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SponsorsStrip from "@/components/SponsorsStrip";
import EventCalendar from "@/components/EventCalendar";
import PowerOfCycling from "@/components/PowerOfCycling";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SponsorsStrip />
        <EventCalendar />
        <PowerOfCycling />
        <Testimonials />
        <Gallery />
        <Faq />
        <Newsletter />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
