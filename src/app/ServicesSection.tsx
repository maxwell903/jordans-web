import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Coaching');

  const tabs = [
    { 
      id: 'Coaching', 
      label: 'Coaching', 
      content: 'Coaching test content',
      image: '/images/coaching-image.jpg'  // Replace with your actual image path
    },
    { 
      id: 'Online Coaching', 
      label: 'Online Coaching', 
      content: 'Online Coaching content',
      image: '/images/online-coaching-image.jpg'  // Replace with your actual image path
    },
    { 
      id: 'Nutrition', 
      label: 'Nutrition', 
      content: 'Nutrition content',
      image: '/images/nutrition-image.jpg'  // Replace with your actual image path
    },
    { 
      id: 'Training Programs', 
      label: 'Training Programs', 
      content: 'Training Program content',
      image: '/images/training-program-image.jpg'  // Replace with your actual image path
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-amber-50 mb-8">Services</h2>
        
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg text-black transition-colors ${
                activeTab === tab.id ? 'bg-amber-50' : 'bg-amber-50/80 hover:bg-amber-50/90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content and Image Area */}
        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;