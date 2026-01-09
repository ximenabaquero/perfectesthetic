import Hero from "@/features/home/sections/Hero";
import Services from "@/features/home/sections/Services";
import Benefits from "@/features/home/sections/Benefits";
import Education from "@/features/home/sections/Education";
import Testimonials from "@/features/home/sections/Testimonials";
import Gallery from "@/features/home/sections/Gallery";
import Contact from "@/features/home/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Education />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
