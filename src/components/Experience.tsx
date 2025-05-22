import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // Optional icon

const experiences = [
    {
        role: "Senior Software Engineer @ Donyati",
        duration: "2022–Present",
        description: "Built an Underwriter Workbench for Skyward Insurance using PowerApps, JS, MySQL, and Azure. This platform streamlined policy processing workflows and improved underwriter efficiency.",
    },
    {
        role: "Java Developer @ TCS (US Bank Project)",
        duration: "2020–2022",
        description: "Designed REST APIs, managed deployments via Jenkins, and monitored containers with Rancher. Implemented customer tracking systems and payment processing solutions.",
    },
    {
        role: "Custom Project: Resource Management System (IGCC)",
        duration: "Side Project",
        description: "Created a full-stack app to manage clients, workers, materials across divisions. Replaced Power BI with in-app reports, providing a comprehensive dashboard for operational management.",
    }
];

const Experience = () => {
    const { ref, inView } = useInView();

    return (
        <section id="experience" className="py-20 bg-secondary/30" style={{
            background: "linear-gradient(to bottom, #eef4fb, #ffffff)"
        }}
        >
            <div ref={ref} className="container max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-blue-500 text-transparent bg-clip-text">Experience</h2>

                <div className="relative border-l border-muted pl-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="mb-10 relative"
                        >
                            <div className="absolute -left-[1.15rem] top-2 rounded-full p-2 bg-blue-500 shadow-md">
                                <Briefcase className="text-white w-4 h-4 bg-blue-500" />
                            </div>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
