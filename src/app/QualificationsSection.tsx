import React, { useState, useEffect } from 'react';
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
  const [isHoverableDevice, setIsHoverableDevice] = useState(false);

  useEffect(() => {
    // Check for hover capability after component mounts
    setIsHoverableDevice(window.matchMedia('(hover: hover)').matches);
  }, []);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    // If transitioning to expanded state, remove hover state
    if (!isExpanded) {
      setIsHovered(false);
    }
  };

  return (
    <motion.div 
      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => isHoverableDevice && setIsHovered(true)}
      onMouseLeave={() => isHoverableDevice && setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image with blur effect when content is shown */}
      <motion.img
        src={imagePath}
        alt={title}
        className="w-full h-full object-cover"
        animate={{
          filter: (isHovered || isExpanded) ? 'blur(3px)' : 'blur(0px)',
          scale: (isHovered || isExpanded) ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Title Overlay (Always Visible) */}
      <motion.div 
        className="absolute inset-x-0 top-0 bg-black/50 p-4"
        animate={{
          backgroundColor: (isHovered || isExpanded) ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg md:text-xl font-bold text-amber-50 text-center">{title}</h3>
      </motion.div>

      {/* Content Overlay (On Hover/Click) */}
      <AnimatePresence>
        {(isHovered || isExpanded) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center"
          >
            <motion.div 
              className="p-3 md:p-6 overflow-y-auto max-h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-amber-50 text-center leading-relaxed">
                {content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Tap Indicator */}
      {!isHoverableDevice && !isExpanded && (
        <div className="absolute bottom-2 right-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-6 h-6 bg-amber-50/80 rounded-full flex items-center justify-center"
          >
            <span className="text-black text-xs">tap</span>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const QualificationsSection: React.FC = () => {
  const qualifications: Qualification[] = [
    {
      title: "NSCA Personal trainer",
      content: "As an NSCA Certified Personal Trainer (NSCA-CPT), I bring a wealth of knowledge and expertise to help you achieve your fitness goals. The NSCA is a globally recognized organization known for its high standards in fitness education and training. To earn this certification, I completed rigorous coursework covering exercise science, biomechanics, nutrition, and program design. This foundation allows me to create safe, effective, and results-driven training programs tailored to your individual needs. With this credential, I can guide you with confidence, blending proven science with practical strategies to deliver the best results.",
      imagePath: "/images/certification.png"
    },
    {
      title: "Bodybuilding",
      content: "I've not only competed in, but also placed in several bodybuilding competitions, which has given me firsthand experience in the dedication and discipline it takes to succeed in this demanding sport. From detailed meal planning and intense training regimens during prep to posing techniques and stage presentation, I understand every aspect of the journey. Whether you're preparing for your first show or aiming to improve your competition ranking, I can guide you through the process with expert advice and support. My experience ensures that you'll have a structured plan to build your best physique and confidently step on stage.",
      imagePath: "/images/bodybuilding-image.jpg"
    },
    {
      title: "Modeling",
      content: "With a background in fit modeling and physique modeling, I understand the unique demands of the industry and the skills required to succeed. From achieving an aesthetically pleasing physique to navigating the expectations of the modeling world, I can help you prepare for success. My coaching focuses on building a balanced, healthy approach to dieting and training, steering clear of mentally unhealthy habits often seen in appearance-based industries. Whether your goal is to improve your physique or break into modeling, I'll provide the guidance to achieve your aspirations in a sustainable, confidence-boosting way.",
      imagePath: "/images/modeling-image.jpg"
    },
    {
      title: "CPR/AED Certification",
      content: "Your health and safety are my top priorities, which is why I'm CPR/AED certified. This credential ensures that I'm fully prepared to handle any medical emergency that may arise during our training sessions. Being trained in life-saving techniques gives you peace of mind, knowing that you're in safe, capable hands. Health and safety are the foundation of effective training, and I'm committed to creating an environment where you can focus on achieving your fitness goals without worry. Your well-being always comes first when training with me.",
      imagePath: "/images/CPR.jpg"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-16"
        >
          Qualifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
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