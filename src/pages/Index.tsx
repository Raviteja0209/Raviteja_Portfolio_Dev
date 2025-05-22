
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="md:ml-64">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
