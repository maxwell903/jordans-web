import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface QualificationItemProps {
  title: string;
  content: string;
  imagePath: string;
  index: number;
}

interface Qualification {
  title: string;
  content: string;
  imagePath: string;
}

const QualificationItem: React.FC<QualificationItemProps> = ({ title, content, imagePath, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const contentVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mb-24 last:mb-0" // Increased spacing between items
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"> {/* Changed to items-start */}
        {/* Text Content */}
        <motion.div 
          variants={contentVariants} 
          className="md:col-span-7 space-y-4"
        >
          <h3 className="text-2xl font-bold text-black">{title}</h3>
          <div className="text-gray-700 pr-8">{content}</div> {/* Added right padding */}
        </motion.div>

        {/* Image Container */}
        <motion.div 
          variants={imageVariants}
          className={`md:col-span-5 relative w-full ${
                       title === "Credentials" ? "aspect-square" : "aspect-[4/3]"
                    }`}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img
              src={imagePath}
              alt={`${title} illustration`}
              className={`w-full h-full ${
                               title === "Credentials" ? "object-contain p-4" : "object-cover object-center"
                             }`}
            />
          </div>
        </motion.div>
      </div>
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
        <h2 className="text-3xl font-bold text-black mb-16">Qualifications</h2>
        <div className="max-w-7xl mx-auto">
          {qualifications.map((qual, index) => (
            <QualificationItem
              key={qual.title}
              title={qual.title}
              content={qual.content}
              imagePath={qual.imagePath}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;