import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Qualification {
  title: string;
  content: string;
  imagePath: string;
}

interface QualificationCardProps extends Qualification {
  // Extends the base Qualification interface
}

const QualificationCard: React.FC<QualificationCardProps> = ({ title, content, imagePath }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image */}
      <img
        src={imagePath}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Title Overlay (Always Visible) */}
      <div className="absolute inset-x-0 top-0 bg-black/50 p-4">
        <h3 className="text-xl font-bold text-amber-50 text-center">{title}</h3>
      </div>

      {/* Content Overlay (On Hover/Click) */}
      <AnimatePresence>
        {(isHovered || isExpanded) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 p-6 flex items-center justify-center"
          >
            <p className="text-amber-50 text-center">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const QualificationsSection: React.FC = () => {
  const qualifications: Qualification[] = [
    {
      title: "Credentials",
      content: "Level 3 Personal Training certification with additional specializations in nutrition and strength training. Certified by leading industry bodies with continuous professional development in modern fitness methodologies and techniques.",
      imagePath: "/images/certification.png"
    },
    {
      title: "Body Building",
      content: "Multiple competition placements in regional bodybuilding championships. Extensive experience in contest prep and physique transformation, applying practical knowledge gained through years of personal competitive experience.",
      imagePath: "/images/bodybuilding-image.jpg"
    },
    {
      title: "Modeling",
      content: "Featured fitness model for major sports brands and magazines. Professional experience in fitness photography and social media content creation, showcasing the results of dedicated training and nutrition protocols.",
      imagePath: "/images/modeling-image.jpg"
    },
    {
      title: "Health And Safety",
      content: "Comprehensive certifications in first aid and injury prevention. Specialized training in proper form and technique, ensuring safe and effective workout environments for clients of all fitness levels.",
      imagePath: "/images/CPR.jpg"
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-black text-center mb-16"
        >
          Qualifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {qualifications.map((qual) => (
            <motion.div
              key={qual.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <QualificationCard {...qual} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;