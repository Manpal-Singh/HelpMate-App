"use client";
import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Hire Professional Cooks",
    description:
      "Book skilled and reliable cooks for daily meals, events, or special occasions.",
    image: "cook.jpg",
  },
  {
    title: "Trusted Home Maids",
    description:
      "Experienced maids to keep your home spotless, organized, and welcoming.",
    image: "maid.jpg",
  },
  {
    title: "Reliable Babysitters",
    description:
      "Caring babysitters who ensure your little ones are safe, happy, and engaged.",
    image: "babysitter.jpg",
  },
  {
    title: "Certified Yoga Instructors",
    description:
      "Professional yoga teachers to help improve your health, flexibility, and mindfulness.",
    image: "yoga.jpg",
  },
  {
    title: "Expert Home Tutors",
    description:
      "Experienced tutors offering personalized learning to boost your child’s success.",
    image: "tutor.jpg",
  },
  {
    title: "Professional Dance Teachers",
    description:
      "Learn from skilled dance instructors who make every session fun, energetic, and inspiring.",
    image: "dance.jpg",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // For swipe handling
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 10000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // Swiped left → next
      nextSlide();
    } else if (distance < -50) {
      // Swiped right → prev
      prevSlide();
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full md:h-100 object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-2xl md:text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/50 text-white px-3 py-2 rounded-full hover:bg-gray-900"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/50 text-white px-3 py-2 rounded-full hover:bg-gray-900"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
