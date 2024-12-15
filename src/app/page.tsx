"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import ExpandableCard from './ExpandableCard';
import ServicesSection from './ServicesSection';
import QualificationsSection from './QualificationsSection';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-amber-50/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/sophit_training_no_background (2).png" // Replace with your actual image path
              alt="Sophit Training Logo"
              className="h-11 w-34" // Adjust size as needed
            />
            <div className="text-2xl font-bold text-black-900">SophitTraining</div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["HOME", "ABOUT", "RESULTS", "SERVICES", "DIET CLIQUE", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black-800 hover:text-amber-950 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};


// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-amber-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="/images/jordan-blackswank.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold text-amber-50 mb-4"
              >
                JORDAN
                <br />
                SOPHER
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl text-amber-50 mb-8"
              >
                PERSONAL TRAINER
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-black text-amber-50 px-8 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                CONTACT ME
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
     {/* About Section */}
<section className="py-20 bg-amber-50">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold text-black-900 mb-8">My Philosophy</h2>
    
          <ExpandableCard title="'Some Super motivational quote with some poop and some more poop with just a tiny bit more poop you may be able to poop like me'  - Jordan Sopher">
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
        </div>
      </section>
      <ServicesSection />
      <QualificationsSection />
    </main>
  );
}
