"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useCallback } from "react";
import ExpandableCard from './ExpandableCard';
import ServicesSection from './ServicesSection';
import QualificationsSection from './QualificationsSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection'

// Navbar Component
const Navbar = ({ onAboutClick }: { onAboutClick: () => void }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResults = () => {
    const qualificationsSection = document.getElementById('qualifications-section');
    if (qualificationsSection) {
      qualificationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-amber-50/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/sophit_training_no_background (2).png"
              alt="Sophit Training Logo"
              className="h-11 w-34"
            />
            <div className="text-2xl font-bold text-black-900">SophitTraining</div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={scrollToTop}
              className="text-black-800 hover:text-amber-950 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={onAboutClick}
              className="text-black-800 hover:text-amber-950 transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={scrollToServices}
              className="text-black-800 hover:text-amber-950 transition-colors cursor-pointer"
            >
              SERVICES
            </button>
            <button
              onClick={scrollToResults}
              className="text-black-800 hover:text-amber-950 transition-colors"
            >
              QUALIFICATIONS
            </button>
            <button
              onClick={scrollToContact}
              className="text-black-800 hover:text-amber-950 transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Contact Button Component with Animation
const ContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -5, 0],
        transition: {
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        }
      }}
      onClick={scrollToContact}
      className="bg-black text-amber-50 px-8 py-3 rounded hover:bg-gray-800 transition-colors"
    >
      CONTACT ME
    </motion.button>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 text-center space-y-2">
        <a 
          href="https://www.linkedin.com/in/jordan-sopher-75a712224/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-50 text-sm hover:text-amber-100 transition-colors block"
        >
          LinkedIn: Jordan Sopher
        </a>
        <a 
          href="https://www.instagram.com/jordan.sopher" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-50 text-sm hover:text-amber-100 transition-colors block"
        >
          Instagram: @jordan.sopher
        </a>
        <p className="text-amber-50 text-sm">Created by WaynesWebDev</p>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  const [isPhilosophyExpanded, setIsPhilosophyExpanded] = useState(false);

  const handleAboutClick = useCallback(() => {
    setIsPhilosophyExpanded(true);
    
    setTimeout(() => {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onAboutClick={handleAboutClick} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="/images/jordan-blackswank.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
          
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
                <ContactButton />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection 
          isPhilosophyExpanded={isPhilosophyExpanded}
          setIsPhilosophyExpanded={setIsPhilosophyExpanded}
        />

        <section id="services-section">
          <ServicesSection />
        </section>
        
        <section id="qualifications-section">
          <QualificationsSection />
        </section>
        
        <section id="contact-section">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}