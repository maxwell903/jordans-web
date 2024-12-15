import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface QualificationItemProps {
  title: string;
  content: string;
  index: number;
}

interface Qualification {
  title: string;
  content: string;
}

const QualificationItem: React.FC<QualificationItemProps> = ({ title, content, index }) => {
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

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mb-12 last:mb-0"
    >
      <motion.h3 
        variants={titleVariants}
        className="text-2xl font-bold text-black mb-4"
      >
        {title}
      </motion.h3>
      <motion.div 
        variants={contentVariants}
        className="text-gray-700"
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

const QualificationsSection: React.FC = () => {
  const qualifications: Qualification[] = [
    {
      title: "Credentials",
      content: "Level 3 Personal Training certification with additional specializations in nutrition and strength training. Certified by leading industry bodies with continuous professional development in modern fitness methodologies and techniques."
    },
    {
      title: "Body Building",
      content: "Multiple competition placements in regional bodybuilding championships. Extensive experience in contest prep and physique transformation, applying practical knowledge gained through years of personal competitive experience."
    },
    {
      title: "Modeling",
      content: "Featured fitness model for major sports brands and magazines. Professional experience in fitness photography and social media content creation, showcasing the results of dedicated training and nutrition protocols."
    },
    {
      title: "Health And Safety",
      content: "Comprehensive certifications in first aid and injury prevention. Specialized training in proper form and technique, ensuring safe and effective workout environments for clients of all fitness levels."
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-12">Qualifications</h2>
        <div className="max-w-3xl mx-auto">
          {qualifications.map((qual, index) => (
            <QualificationItem
              key={qual.title}
              title={qual.title}
              content={qual.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;