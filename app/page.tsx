import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D0E] text-[#F4F4F2]">


      <Hero />

      <Stats />

      <Projects />

      <About />

      <Experience />

      <Contact />

      <Footer />

    </main>
  );
}