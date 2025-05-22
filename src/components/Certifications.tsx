"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Eye, Award as AwardIcon } from "lucide-react";
import metaIcon from "@/components/assets/meta.png";
import metaCertificate from "@/components/assets/MetaFrontEndDevelopmentCertificate.jpg";
import reactCertificate from "@/components/assets/ReactCertificate.jpg";
import quarteraward1 from "@/components/assets/Q22023AwardWinnerCertificate.jpg";
import quarteraward2 from "@/components/assets/Q32023AwardWinnerCertificate.jpg";

const CertificationCard = ({
  cert,
  index,
  onPreview,
}: {
  cert: any;
  index: number;
  onPreview: (img: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <Card className="hover:shadow-lg transition-transform transform hover:scale-[1.02]">
      <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={metaIcon}
            alt="Meta Logo"
            width={32}
            height={32}
            className="rounded shrink-0"
          />
          <div>
            <h4 className="font-medium text-base sm:text-lg">{cert.title}</h4>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </div>
        </div>
        <button
          onClick={() => onPreview(cert.link)}
          className="text-red-500 hover:text-red-500/80"
          title="View Certificate"
        >
          <Eye className="w-5 h-5" />
        </button>
      </CardContent>
    </Card>
  </motion.div>
);

const AwardCard = ({
  award,
  index,
  onPreview,
}: {
  award: any;
  index: number;
  onPreview: (img: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <Card className="hover:shadow-lg transition-transform transform hover:scale-[1.02]">
      <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <AwardIcon className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
            <h4 className="font-medium text-base sm:text-lg">{award.title}</h4>
          </div>
          <p className="text-sm text-muted-foreground">{award.description}</p>
        </div>
        {award.link && (
          <button
            onClick={() => onPreview(award.link)}
            className="text-red-500 hover:text-red-500/80"
            title="View Award"
          >
            <Eye className="w-5 h-5" />
          </button>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const Certifications = () => {
  const { ref, inView } = useInView();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const certifications = [
    {
      title: "Meta Front-End Development Certification",
      issuer: "Meta",
      link: metaCertificate,
    },
    {
      title: "Meta React Certificate",
      issuer: "Meta",
      link: reactCertificate,
    },
  ];

  const awards = [
    {
      title: "Q2 2023 Dynamo Award Winner @ Donyati",
      description:
        "Technological advancement within our organization for Technology Service",
      link: quarteraward1,
    },
    {
      title: "Q3 2023 Dynamo Award Winner @ Donyati",
      description:
        "Technological advancement within our organization for Technology Service",
      link: quarteraward2,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-8"
      style={{
        background: "linear-gradient(to bottom, #fff5f5, #ffffff)",
      }}
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto section-container ${inView ? "animate" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 bg-red-500 text-transparent bg-clip-text">
          Certifications & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <CertificationCard
                  key={i}
                  cert={cert}
                  index={i}
                  onPreview={(img: string) => setPreviewImage(img)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Awards</h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <AwardCard
                  key={i}
                  award={award}
                  index={i}
                  onPreview={(img: string) => setPreviewImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-4">
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-2 right-2 text-black hover:text-gray-600 text-xl"
              >
                ✕
              </button>
              <img
                src={previewImage}
                alt="Certificate Preview"
                className="w-full h-auto rounded object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
