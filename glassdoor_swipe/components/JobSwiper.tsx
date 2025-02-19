'use client';

import { useState } from 'react';
import JobCard from './JobCard';
import { motion, PanInfo } from 'framer-motion';

export default function JobSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      handleSwipe(direction);
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction}`);
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[600px]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        className="absolute w-full h-full"
      >
        <JobCard />
      </motion.div>
    </div>
  );
}
