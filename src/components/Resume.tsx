import { FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import myCV from "@/components/assets/Adari RaviTeja Resume.pdf"

const Resume = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="resume"
      className="py-16 md:py-24"
      style={{
        background: "linear-gradient(to bottom, #e3e6ea, #ffffff)"
      }}
    >

      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-700 ease-in-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8" style={{ color: "#2f3640" }} />
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: "#2f3640" }}>
              Resume
            </h2>
          </div>

          {/* Content Box */}
          <div className="bg-white rounded-xl shadow-lg p-10 text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Review my resume for a comprehensive summary of my skills, experience, and qualifications.
            </p>

            <a
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gap-2 rounded-full px-6 py-3 text-base text-white transition-all duration-300"
                style={{ backgroundColor: "#2f3640" }}
              >
                <Eye className="h-5 w-5" />
                View Resume (PDF)
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
