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

    // EmailJS send function
    emailjs
      .sendForm(
        "service_gfpq4ol", // EmailJS service ID
        "template_0yl34ck", // EmailJS template ID
        e.target as HTMLFormElement, // The form element
        "vHS57hULH_kO-0EV4" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Message Sent Successfully:", response);
          setIsSubmitting(false);
          toast.success("Your message has been sent!");
          // Clear the form data after sending
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error sending message:", error);
          setIsSubmitting(false);
          toast.error("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, #f5f0e1, #ffffff)"
      }}

    >
      <div
        ref={ref}
        className={`container max-w-5xl mx-auto px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#8b5e3c" }}
          >
            Let’s Connect
          </h2>
          <p className="text-lg" style={{ color: "#5a4632" }}>
            I'm open to collaboration, freelance projects, and full-time roles.
            Drop me a line!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="shadow-xl">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <Mail style={{ color: "#a47148" }} />
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: "#8b5e3c" }}>
                    Email
                  </h3>
                  <a
                    href="mailto:raviteja.2998@gmail.com"
                    style={{ color: "#5a4632" }}
                    className="hover:text-[#8b5e3c] transition-colors"
                  >
                    raviteja.2998@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone style={{ color: "#a47148" }} />
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: "#8b5e3c" }}>
                    Phone
                  </h3>
                  <p style={{ color: "#5a4632" }}>+91 9866234563</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Github style={{ color: "#a47148" }} />
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: "#8b5e3c" }}>
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/Raviteja0209"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#5a4632" }}
                    className="hover:text-[#8b5e3c] transition-colors"
                  >
                    github.com/Raviteja0209
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-6 space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" style={{ color: "#5a4632" }}>
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" style={{ color: "#5a4632" }}>
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
                  />
                </div>

                <div>
                  <Label htmlFor="message" style={{ color: "#5a4632" }}>
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
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#8b5e3c", color: "#fff" }}
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
