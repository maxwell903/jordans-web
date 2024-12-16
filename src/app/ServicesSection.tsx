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
      content: (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-amber-50 mb-6">In Person Coaching</h3>
          <p className="text-lg leading-relaxed mb-8 text-amber-50">
            Experience the most effective way to achieve your fitness goals with my in-person coaching sessions. 
            Combining strength training, mobility, and cardiovascular exercises, I tailor each session to help 
            you look and feel your best. With hands-on guidance, real-time form corrections, and personalized 
            motivation, you'll build strength, improve movement, and create lasting results. Let's simplify your 
            fitness journey and make progress you can feel proud of—one session at a time.
          </p>
          
          <div className="space-y-6 text-amber-50">
            <div>
              <h4 className="text-xl font-bold mb-2">Individual Training Session:</h4>
              <p>Single Session: $50</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">Bundles:</h4>
              <ul className="space-y-2">
                <li>5-Session Package: $245 (Save $5 per session, $49 per session)</li>
                <li>10-Session Package: $470 (Save $30, $47 per session)</li>
                <li>20-Session Package: $910 (Save $90, $45 per session)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">Additional Options:</h4>
              <ul className="space-y-2">
                <li>Monthly Unlimited Training: $1,260 (Best for those who want intensive, frequent sessions)</li>
                <li>Partner Training (2 people): Add $14 per session per person</li>
                <li>Introductory Package: $140 for 3 sessions (for new clients to try it out at a discounted rate)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      image: '/images/coaching-image.jpg'
    },
    { 
      id: 'Online Coaching', 
      label: 'Online Coaching', 
      content: (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-amber-50 mb-6">Online Coaching</h3>
          <p className="text-lg leading-relaxed mb-8 text-amber-50">
            Achieve your fitness goals from anywhere with my online training program. 
            Through the Trainerize app, I'll deliver customized workouts every week 
            tailored to your needs and progress. You'll have access to weekly video 
            check-ins for accountability, personalized diet guidance, and unlimited 
            communication for all your fitness questions. This flexible and convenient 
            option gives you expert support to build the body you deserve—on your 
            schedule.
          </p>
          <ul className="space-y-4 text-amber-50">
            <li>
              <div className="text-xl font-bold">4-Week Package: $150</div>
              <div className="text-amber-50/80 italic">Includes weekly workouts, video check-ins, and general diet guidance.</div>
            </li>
            <li>
              <div className="text-xl font-bold">8-Week Package: $280 (Save $20)</div>
              <div className="text-amber-50/80 italic">Two months of fully customized training and support.</div>
            </li>
            <li>
              <div className="text-xl font-bold">12-Week Package: $400 (Save $50)</div>
              <div className="text-amber-50/80 italic">Perfect for building long-term habits and visible progress.</div>
            </li>
            <li>
              <div className="text-xl font-bold">6-Month Package: $750 (Save $150)</div>
              <div className="text-amber-50/80 italic">Comprehensive support for significant fitness transformations.</div>
            </li>
            <li>
              <div className="text-xl font-bold">1-Year Package: $1,400 (Save $400)</div>
              <div className="text-amber-50/80 italic">The ultimate commitment to lasting results, with consistent guidance and accountability.</div>
            </li>
          </ul>
        </div>
      ),
      image: '/images/online-coaching-image.jpg'
    },
    { 
      id: 'Nutrition', 
      label: 'Nutrition', 
      content: (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-amber-50 mb-6">Nutrition</h3>
          <p className="text-lg leading-relaxed mb-8 text-amber-50">
            Fuel your body and optimize your results with a personalized nutrition plan tailored to your goals 
            and dietary needs. Whether you're looking to lose weight, build muscle, train for an event, or 
            simply feel your best, I'll create a plan that hits both your macro and micronutrient targets. 
            Take the guesswork out of your diet with expert guidance and ongoing support for all your nutrition 
            questions. Let's make eating simple, sustainable, and effective for achieving your goals.
          </p>
          
          <div className="space-y-6 text-amber-50">
            <div>
              <h4 className="text-xl font-bold">Personalized Nutrition Plan: $120</h4>
              <p className="text-amber-50/80 italic">A one-time, customized plan tailored to your goals, dietary restrictions, and macronutrient/micronutrient needs. Perfect for weight loss, muscle gain, or overall health.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold">Sport-Specific Nutrition Plan: $150</h4>
              <p className="text-amber-50/80 italic">Designed for athletes or seasonal goals like bodybuilding, endurance training, or competition prep. Includes tailored recommendations for performance and recovery.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold">Diet Plan Update: $60</h4>
              <p className="text-amber-50/80 italic">For those needing adjustments due to progress, new goals, or seasonal changes.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mt-8">Bundle Option:</h4>
              <div className="text-xl font-bold">Nutrition + Training Plan Combo: $200</div>
              <p className="text-amber-50/80 italic">Combines a personalized nutrition plan with a one-time training plan for complete guidance.</p>
            </div>
          </div>
        </div>
      ),
      image: '/images/nutrition-image.jpg'
    },
    { 
      id: 'Training Programs', 
      label: 'Training Programs', 
      content: (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-amber-50 mb-6">Training Programs</h3>
          <p className="text-lg leading-relaxed mb-8 text-amber-50">
            Take your fitness to the next level with tailored workout programs designed to help you progress over 
            time. Choose from pre-made plans for strength and power, muscle gain, body composition, cardiovascular 
            fitness, or sport-specific performance. Each program is carefully crafted to match your goals and 
            ensure you progress through phases to maintain consistent progress. Whether you're looking to build 
            muscle, improve endurance, or train for your sport, I've got the perfect plan for you. Let's make 
            your training purposeful and results-driven!
          </p>
          
          <div className="space-y-4 text-amber-50">
            <div>
              <h4 className="text-xl font-bold">4-Week Plan: $80</h4>
              <p className="text-amber-50/80 italic">A short-term program designed to kickstart your progress and keep you focused on your goals.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold">8-Week Plan: $150 (Save $10)</h4>
              <p className="text-amber-50/80 italic">A medium-term program for consistent progress and noticeable results.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold">12-Week Plan: $210 (Save $30)</h4>
              <p className="text-amber-50/80 italic">A comprehensive program for long-term success, offering greater progression and results.</p>
            </div>
          </div>
        </div>
      ),
      image: '/images/training-plan-image.png'
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
            className="text-3xl font-bold text-amber-50 mb-2"
          >
            Services
          </motion.h2>
          
          {/* Tab Buttons - Made scrollable for mobile */}
          <motion.div 
            variants={itemVariants}
            className="flex overflow-x-auto pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible md:flex-wrap gap-4"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                variants={itemVariants}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-black transition-colors flex-shrink-0 ${
                  activeTab === tab.id ? 'bg-amber-50' : 'bg-amber-50/80 hover:bg-amber-50/90'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Content and Image Area - Modified for better mobile layout */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8"
          >
            {/* Content Side - Now always full width on mobile */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="text-amber-50">
                    {tabs.find(tab => tab.id === activeTab)?.content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Side - Now below content on mobile */}
            <div className="relative h-[400px] lg:h-[615px] overflow-hidden rounded-lg">
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