import About from "./ui/components/about";
import Contact from "./ui/components/contact";
import Experience from "./ui/components/experience";
import Footer from "./ui/components/footer";
import Hero from "./ui/components/hero";
import Projects from "./ui/components/projects";
import Skills from "./ui/components/skills";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}