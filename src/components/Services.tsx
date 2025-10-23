'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import data from '@/data/data.json';

const Services = () => {
  const [_, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { title, subtitle, serviceList: services } = data.services;

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 bg-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(
            (
              service: {
                id: number;
                title: string;
                description: string;
                image: string;
                price: string;
                duration: string;
                popular: boolean;
              },
              index: number
            ) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {service.popular && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      Phổ biến
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-secondary w-full text-center">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex-1 flex items-end">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start">
                        <span className="text-primary font-bold">
                          {service.price}
                        </span>
                        {service.duration && (
                          <span className="text-gray-500 text-sm">
                            ({service.duration})
                          </span>
                        )}
                      </div>
                      <a
                        href="#booking"
                        className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full text-sm hover:shadow-lg transition-all duration-300 text-nowrap"
                      >
                        Đặt lịch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
