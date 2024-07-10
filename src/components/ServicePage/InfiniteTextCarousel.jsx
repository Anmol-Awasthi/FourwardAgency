import React from 'react';
import { motion } from 'framer-motion';

const InfiniteTextMarquee = () => {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 50,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div className="relative w-full h-40 overflow-hidden bg-[#BDC6C5] border-2 border-zinc-400">
      <motion.div
        className="absolute whitespace-nowrap will-change-transform flex"
        variants={marqueeVariants}
        animate="animate"
      >
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
        <span className="inline-block text-9xl font-bold text-transparent mx-4" style={{ WebkitTextStroke: '1px gray' }}>
          OUR SERVICES
        </span>
      </motion.div>
    </div>
  );
};

export default InfiniteTextMarquee;
