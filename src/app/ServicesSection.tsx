import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('workouts');

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-amber-50 mb-8">Services</h2>
        
        <div className="space-y-6">
          {/* Tab Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('workouts')}
              className={`px-6 py-3 rounded-lg text-black transition-colors ${
                activeTab === 'workouts' ? 'bg-amber-50' : 'bg-amber-50/80 hover:bg-amber-50/90'
              }`}
            >
              Workouts
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`px-6 py-3 rounded-lg text-black transition-colors ${
                activeTab === 'nutrition' ? 'bg-amber-50' : 'bg-amber-50/80 hover:bg-amber-50/90'
              }`}
            >
              Nutrition
            </button>
          </div>

          {/* Content Area */}
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
                  {activeTab === 'workouts' ? (
                    <p>Workouts test</p>
                  ) : (
                    <p>Nutrition test</p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;