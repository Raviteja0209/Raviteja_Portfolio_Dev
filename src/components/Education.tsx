import { GraduationCap, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Education = () => {
  const { ref, inView } = useInView();

  const educationData = [
    {
      year: "2016–2020",
      degree: "Bachelor of Technology in ELECTRONICS AND COMMUNICATION ENGINEERING",
      institution: "VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY, Visakhapatnam, AP",
      details: "With CGPA of 8.65",
    },
    {
      year: "2014–2016",
      degree: "BOARD OF INTERMEDIATE EDUCATION: MPC",
      institution: "ASCENT JUNIOR COLLEGE, Visakhapatnam, AP",
      details: "With 94.6%",
    },
    {
      year: "2014",
      degree: "SECONDARY SCHOOL CERTIFICATE (SSC)",
      institution: "SRI CHAITANYA TECHNO SCHOOL, Yelamanchili, AP",
      details: "With CGPA of 9.7",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 sm:py-20 md:py-24"
      style={{
        background: "linear-gradient(to bottom, #fffaf0, #ffffff)",
      }}
    >
      <div className="container px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-opacity duration-700 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: "#f59e0b" }} />
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "#f59e0b" }}
            >
              Education
            </h2>
          </div>

          {/* Timeline container */}
          <div className="relative border-l-4 pl-6 sm:pl-8 space-y-10" style={{ borderColor: "#f59e0b" }}>
            {educationData.map(({ year, degree, institution, details }, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <span
                  className="absolute -left-3 sm:-left-3.5 top-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full shadow-md"
                  style={{ backgroundColor: "#f59e0b" }}
                ></span>

                {/* Content Card */}
                <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-base sm:text-lg font-semibold" style={{ color: "#f59e0b" }}>
                    {year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold mt-2 text-gray-900">{degree}</h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{institution}</p>
                  <div className="mt-4 flex items-start gap-2 text-gray-500">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#f59e0b" }} />
                    <p className="text-sm sm:text-base">{details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
