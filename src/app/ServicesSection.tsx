import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Coaching');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const tabs = [
    { 
      id: 'Coaching', 
      label: 'Coaching', 
      content: 'Coaching test content',
      image: '/images/coaching-image.jpg'
    },
    { 
      id: 'Online Coaching', 
      label: 'Online Coaching', 
      content: 'Online Coaching content',
      image: '/images/online-coaching-image.jpg'
    },
    { 
      id: 'Nutrition', 
      label: 'Nutrition', 
      content: 'Nutrition content',
      image: '/images/nutrition-image.jpg'
    },
    { 
      id: 'Training Programs', 
      label: 'Training Programs', 
      content: 'Training Program content',
      image: '/images/training-program-image.jpg'
    },
  ];

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
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-amber-50 mb-8"
          >
            Services
          </motion.h2>
          
          {/* Tab Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                variants={itemVariants}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-black transition-colors ${
                  activeTab === tab.id ? 'bg-amber-50' : 'bg-amber-50/80 hover:bg-amber-50/90'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Content and Image Area */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Content Side */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full"
                >
                  <div className="text-amber-50 text-left">
                    {tabs.find(tab => tab.id === activeTab)?.content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Side */}
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={tabs.find(tab => tab.id === activeTab)?.image}
                    alt={`${activeTab} illustration`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;