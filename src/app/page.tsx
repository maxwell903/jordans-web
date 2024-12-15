"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">SophitTraining</div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["HOME", "ABOUT", "RESULTS", "SERVICES", "DIET CLIQUE", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
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
    <main className="min-h-screen">
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold text-white mb-4"
              >
                JORDAN
                <br />
                SOPHER
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl text-white mb-8"
              >
                PERSONAL TRAINER
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors"
              >
                CONTACT ME
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          {/* Add your about content here */}
        </div>
      </section>

      {/* Add more sections as needed */}
    </main>
  );
}