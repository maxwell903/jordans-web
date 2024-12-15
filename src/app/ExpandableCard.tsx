import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isExpanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
  id?: string;
}

const ExpandableCard = ({ 
  title, 
  children, 
  className = '',
  isExpanded: externalIsExpanded,
  onExpandChange,
  id
}: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (externalIsExpanded !== undefined) {
      setIsExpanded(externalIsExpanded);
    }
  }, [externalIsExpanded]);

  const handleToggle = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onExpandChange?.(newExpandedState);
  };

  return (
    <div 
      ref={cardRef}
      id={id} 
      className={`w-full bg-amber-50 rounded-lg shadow-md ${className}`}
    >
      <button
        onClick={handleToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-100 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 flex-grow text-center pr-8">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-black-200 bg-amber-50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCard;