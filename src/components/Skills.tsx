import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Code, Settings, Grid } from "lucide-react";

// Tech Icons
import {
  SiSpringboot, SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiGraphql, SiGit, SiGithub, SiGitlab, SiJenkins,
  SiSupabase, SiHasura, SiPostman, SiJirasoftware, SiSonarqube, SiDevexpress,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="text-purple-600 w-6 h-6" />,
    skills: [
      { icon: <FaJava />, label: "Java" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
      { icon: <SiReact />, label: "ReactJS" },
      { icon: <SiNodedotjs />, label: "NodeJS" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiHtml5 />, label: "HTML" },
      { icon: <SiCss3 />, label: "CSS" },
      { icon: <SiGraphql />, label: "GraphQL" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="text-purple-600 w-6 h-6" />,
    skills: [
      { icon: <SiGit />, label: "Git" },
      { icon: <SiGithub />, label: "GitHub" },
      { icon: <SiGitlab />, label: "GitLab" },
      { icon: <SiJenkins />, label: "Jenkins" },
      { icon: <SiSupabase />, label: "Supabase" },
      { icon: <SiHasura />, label: "Hasura" },
    ]
  },
  {
    title: "Others",
    icon: <Grid className="text-purple-600 w-6 h-6" />,
    skills: [
      { icon: <SiPostman />, label: "Postman" },
      { icon: <SiJirasoftware />, label: "JIRA" },
      { icon: <SiSonarqube />, label: "SonarQube" },
      { icon: <SiDevexpress />, label: "DevExpress" },
      { icon: <HiOutlineSwitchHorizontal />, label: "Power Automate" },
    ]
  }
];

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-20" style={{
      background: "linear-gradient(to bottom, #f3e8ff, #ffffff)"
    }}>
      <div
        ref={ref}
        className={`container max-w-4xl section-container ${inView ? 'animate' : ''}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-transparent bg-clip-text">Skills</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="flex flex-col items-center gap-1 w-16 text-center text-xs text-muted-foreground"
                      >
                        <div className="text-2xl">{skill.icon}</div>
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
