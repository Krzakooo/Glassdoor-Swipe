'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchJobs } from '@/lib/api';
import type { Job } from '@/lib/types';

export default function JobSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
    };
    loadJobs();
  }, []);

  const handleSwipe = (isLike: boolean) => {
    setDirection(isLike ? 1 : -1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % jobs.length);
      setDirection(0);
    }, 300);
  };

  if (currentIndex >= jobs.length) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">No more jobs to show!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: direction === 0 ? 0 : direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4"
        >
          <h2 className="text-xl font-bold mb-2">{jobs[currentIndex].title}</h2>
          <h3 className="text-lg text-gray-600 dark:text-gray-300 mb-2">{jobs[currentIndex].company}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{jobs[currentIndex].location}</p>
          <div className="mb-4">
            <span className="text-green-600 dark:text-green-400 font-semibold">
              ${jobs[currentIndex].salary.min.toLocaleString()} - ${jobs[currentIndex].salary.max.toLocaleString()} {jobs[currentIndex].salary.currency}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{jobs[currentIndex].description}</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Requirements:</h4>
            <ul className="list-disc list-inside">
              {jobs[currentIndex].requirements.map((req, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400">{req}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleSwipe(false)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
        >
          Pass
        </button>
        <button
          onClick={() => handleSwipe(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
        >
          Like
        </button>
      </div>
    </div>
  );
}
