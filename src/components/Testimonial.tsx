'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import data from '@/data/data.json';

const Testimonial = () => {
  const { testimonials, callToAction } = data.whyChooseUs;
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="py-16 bg-secondary/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-secondary to-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Khách Hàng Nói Gì Về Chúng Tôi
              </h3>
              <div className="relative h-64">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeTestimonial === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/90 italic mb-6">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-white/80 text-sm">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-all ${
                      activeTestimonial === index
                        ? 'bg-white scale-110'
                        : 'bg-white/50'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="relative h-96 md:h-auto">
              <Image
                src={callToAction.image}
                alt="Spa Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-lg max-w-xs text-center">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {callToAction.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {callToAction.description}
                  </p>
                  <a
                    href={callToAction.buttonLink}
                    className="inline-block px-6 py-2 bg-gradient-to-r from-secondary to-primary text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    {callToAction.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
