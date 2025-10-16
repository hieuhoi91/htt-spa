'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Expand, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/assets/gallery-1.jpg',
    alt: 'Spa treatment',
    category: 'Chăm sóc da',
  },
  {
    id: 2,
    src: '/assets/gallery-2.jpg',
    alt: 'Facial treatment',
    category: 'Chăm sóc da',
  },
  {
    id: 3,
    src: '/assets/gallery-3.jpg',
    alt: 'Massage therapy',
    category: 'Massage',
  },
  {
    id: 4,
    src: '/assets/gallery-4.jpg',
    alt: 'Spa environment',
    category: 'Không gian',
  },
  {
    id: 5,
    src: '/assets/gallery-5.jpg',
    alt: 'Beauty treatment',
    category: 'Làm đẹp',
  },
  {
    id: 6,
    src: '/assets/gallery-6.jpg',
    alt: 'Relaxation area',
    category: 'Không gian',
  },
  {
    id: 7,
    src: '/assets/gallery-7.jpg',
    alt: 'Facial massage',
    category: 'Massage',
  },
  {
    id: 8,
    src: '/assets/gallery-8.jpg',
    alt: 'Spa products',
    category: 'Sản phẩm',
  },
  {
    id: 9,
    src: '/assets/gallery-9.jpg',
    alt: 'Wellness treatment',
    category: 'Chăm sóc da',
  },
  {
    id: 10,
    src: '/assets/gallery-10.jpg',
    alt: 'Spa interior',
    category: 'Không gian',
  },
  {
    id: 11,
    src: '/assets/gallery-11.jpg',
    alt: 'Beauty products',
    category: 'Sản phẩm',
  },
  {
    id: 12,
    src: '/assets/gallery-12.jpg',
    alt: 'Relaxation therapy',
    category: 'Massage',
  },
];

const categories = [
  'Tất cả',
  'Chăm sóc da',
  'Massage',
  'Không gian',
  'Sản phẩm',
  'Làm đẹp',
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Tất cả') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((image) => image.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === 'prev') {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-16 bg-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Thư Viện Hình Ảnh
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá không gian và dịch vụ tại Her S Spa Hoa Thạch Thảo qua bộ
            sưu tập hình ảnh của chúng tôi
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button
                  onClick={() => openLightbox(image.id)}
                  className="bg-white/90 text-secondary p-3 rounded-full hover:bg-white transition-all duration-300"
                >
                  <Expand className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[80vh]">
              {filteredImages
                .filter((img) => img.id === selectedImage)
                .map((image) => (
                  <Image
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                ))}
            </div>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
