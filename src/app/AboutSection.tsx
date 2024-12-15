import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ExpandableCard from './ExpandableCard';

interface AboutSectionProps {
  isPhilosophyExpanded: boolean;
  setIsPhilosophyExpanded: (expanded: boolean) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  isPhilosophyExpanded, 
  setIsPhilosophyExpanded 
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section ref={sectionRef} id="about-section" className="py-20 bg-amber-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-black-900 mb-8"
          >
            My Philosophy
          </motion.h2>
          
          <ExpandableCard 
            title="'Some Super motivational quote with some poop and some more poop with just a tiny bit more poop you may be able to poop like me'  - Jordan Sopher"
            isExpanded={isPhilosophyExpanded}
            onExpandChange={setIsPhilosophyExpanded}
          >
            <div className="space-y-4">
              <p className="text-black-900">
                Welcome to a journey of transformation! As your dedicated personal trainer, 
                I believe in creating personalized fitness experiences that align with your unique goals 
                and lifestyle. With over a decade of experience in fitness training, I've helped 
                hundreds of clients achieve their dream physique and optimal health.
              </p>
              <p className="text-black-900">
                Whether you're just starting your fitness journey or looking to break through 
                plateaus, my comprehensive approach combines cutting-edge training techniques 
                with sustainable nutrition plans. Together, we'll create a roadmap to your 
                success that goes beyond just physical transformation – we'll build habits 
                that last a lifetime.
              </p>
              <ul className="list-disc list-inside text-amber-900">
                <li>Customized workout programs</li>
                <li>Nutrition guidance and meal planning</li>
                <li>Progress tracking and adjustments</li>
                <li>Ongoing support and motivation</li>
              </ul>
            </div>
          </ExpandableCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;