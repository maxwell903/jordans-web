import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We'll implement Gmail integration later
    console.log('Form submitted:', { email, subject, message });
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-amber-50 mb-8">Let's Talk!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-amber-50/10 border border-amber-50/20 rounded-lg 
                         text-amber-50 placeholder-amber-50/50 focus:outline-none focus:border-amber-50/50
                         transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-amber-50/10 border border-amber-50/20 rounded-lg 
                         text-amber-50 placeholder-amber-50/50 focus:outline-none focus:border-amber-50/50
                         transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={6}
                className="w-full px-4 py-3 bg-amber-50/10 border border-amber-50/20 rounded-lg 
                         text-amber-50 placeholder-amber-50/50 focus:outline-none focus:border-amber-50/50
                         transition-colors resize-none"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-amber-50 text-black rounded-lg font-semibold
                       hover:bg-amber-100 transition-colors"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;