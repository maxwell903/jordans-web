import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Create a cleaner formatted message with subject
      const formattedMessage = `
Hello Jordan,

You got a new message from:
${email}

Subject:
${subject}

Message:
${message}

Best wishes,
Your Website
      `;

      const result = await emailjs.send(
        'service_8l4zstg', // Get this from EmailJS
        'template_xnxpkek', // Get this from EmailJS
        {
          to_email: 'sophittrainingco@gmail.com',
          from_email: email,
          subject: subject,
          message: formattedMessage,
        },
        'aNYpE71vR6lSuDBVc' // Get this from EmailJS
      );

      if (result.status === 200) {
        setStatus('success');
        // Clear form
        setEmail('');
        setSubject('');
        setMessage('');
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
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
                disabled={status === 'sending'}
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
                disabled={status === 'sending'}
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
                disabled={status === 'sending'}
              />
            </div>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="text-green-400 text-sm">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="text-red-400 text-sm">Failed to send message. Please try again.</div>
            )}
            
            <motion.button
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              className={`w-full px-8 py-3 bg-amber-50 text-black rounded-lg font-semibold
                       transition-colors ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-100'}`}
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;