import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Underwriter Workbench",
    description:
      "End-to-end policy processing system for insurance domain. Streamlines underwriter workflows while ensuring compliance and risk assessment standards.",
    tech: ["PowerApps", "JavaScript", "MySQL", "Azure"],
    tags: ["Insurance", "Process Automation"]
  },
  {
    title: "US Bank – Login & Payment API Suite",
    description:
      "Developed customer activity tracking & payments features. Created secure APIs for authentication and transaction processing.",
    tech: ["Java", "Spring Boot", "REST API", "Jenkins"],
    tags: ["Banking", "Security"]
  },
  {
    title: "IGCC Resource Management System",
    description:
      "Full-stack dashboard for managing operations across civil, electrical, and mechanical domains. Provides comprehensive resource tracking and reporting.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["Resource Management", "Dashboard"]
  }
];

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      style={{
        background: "linear-gradient(to bottom, #f8fafc, #e2e8f0)"
      }}
    >
      <div
        ref={ref}
        className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-blue-600 text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex h-full"
            >
              <Card className="flex flex-col justify-between h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100"
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
