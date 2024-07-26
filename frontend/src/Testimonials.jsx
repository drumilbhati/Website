import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Brother Zolton",
    story: "The Epsilon Program has shown me the path to true enlightenment. Kifflom!",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Sister Amber",
    story: "Through generous donations, I've ascended to a higher plane of existence.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Brother Teddy",
    story: "Epsilon has taught me the truth about the world. The world is 157 years old!",
    avatar: "/api/placeholder/100/100"
  }
];

const EpsilonTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cyan-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-8 text-center animate-pulse">Epsilon Program Testimonials</h1>
      <motion.div
        key={currentTestimonial}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <img
            src={testimonials[currentTestimonial].avatar}
            alt={testimonials[currentTestimonial].name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center">{testimonials[currentTestimonial].name}</h2>
          <p className="text-center italic">"{testimonials[currentTestimonial].story}"</p>
        </div>
      </motion.div>
      <p className="mt-8 text-sm animate-bounce">Kifflom, Brother-Brother!</p>
    </div>
  );
};

export default EpsilonTestimonials;