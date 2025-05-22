import React from 'react';
import teamsDp from '@/components/assets/Teams DP.jpg'; // Update path as needed
import { useInView } from '@/hooks/useInView';

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-12 md:pt-16 pb-16 md:pb-20"
      style={{
        background: "linear-gradient(to bottom, #fdfaf6, #ffffff)",
      }}
    >
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="order-1 md:order-none md:col-span-1 flex justify-center">
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-600 shadow-xl bg-gradient-to-br from-purple-100 to-teal-50 p-1">
              <img
                src={teamsDp}
                alt="Ravi Teja Adari"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>

          {/* Greeting and Summary */}
          <div ref={ref} className="order-2 md:order-none md:col-span-2 space-y-4">
            <div
              className={`transition-opacity duration-1000 ${inView ? "opacity-100 animate-fade-in" : "opacity-0"}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(6px)",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
              }}
            >
              <p className="text-base sm:text-lg text-teal-400 font-medium">HI THERE! I'M</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                <span className="text-teal-600">RAVI</span> TEJA ADARI
              </h1>
            </div>

            <div
              className={`mt-6 transition-opacity duration-1000 ${inView ? "opacity-100 animate-fade-in" : "opacity-0"}`}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
                I am a software development professional with 5 years of experience, specializing in full stack development and mid-tier Java backend solutions. My expertise includes building dynamic and responsive user interfaces using ReactJS and Microsoft PowerApps, as well as developing and deploying scalable RESTful and GraphQL APIs through CI/CD pipelines such as Jenkins. I have strong proficiency in Spring Boot for backend development, with a focus on delivering high-quality code supported by comprehensive unit testing and robust coverage tracked via SonarQube. Additionally, I am experienced in version control using Git and adept at streamlining business processes through workflow automation using Power Automate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
