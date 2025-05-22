import { useState } from "react";
import { Mail, Phone, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";
import emailjs from "emailjs-com";

const Contact = () => {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_gfpq4ol",
        "template_0yl34ck",
        e.target as HTMLFormElement,
        "vHS57hULH_kO-0EV4"
      )
      .then(
        () => {
          toast.success("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          toast.error("Failed to send your message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20"
      style={{
        background: "linear-gradient(to bottom, #f5f0e1, #ffffff)",
      }}
    >
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#8b5e3c" }}
          >
            Let’s Connect
          </h2>
          <p className="text-base sm:text-lg" style={{ color: "#5a4632" }}>
            I'm open to collaboration, freelance projects, and full-time roles.
            Drop me a line!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <Card className="shadow-xl">
            <CardContent className="p-5 sm:p-6 space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "raviteja.2998@gmail.com",
                  href: "mailto:raviteja.2998@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 9866234563",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "github.com/Raviteja0209",
                  href: "https://github.com/Raviteja0209",
                },
              ].map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <Icon style={{ color: "#a47148" }} />
                  <div>
                    <h3
                      className="font-semibold text-base sm:text-lg"
                      style={{ color: "#8b5e3c" }}
                    >
                      {title}
                    </h3>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-[#5a4632] hover:text-[#8b5e3c] transition-colors break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-[#5a4632]">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-5 sm:p-6 space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#5a4632]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#5a4632]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#5a4632]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 text-white"
                  style={{ backgroundColor: "#8b5e3c" }}
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
