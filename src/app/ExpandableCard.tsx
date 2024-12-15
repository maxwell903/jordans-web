import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Synchronize with external expanded state
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
      className={`w-full bg-amber-50 dark:bg-amber-50 rounded-lg shadow-md overflow-hidden border-1 border-black ${className}`}
    >
      <button
        onClick={handleToggle}
        className="w-full px-6 py-4 flex items-center hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors relative"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 w-full text-center">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-6"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500 dark:text-gray-400"
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
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCard;