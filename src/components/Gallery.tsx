'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Expand, X } from 'lucide-react';
import data from '@/data/data.json';

const Gallery = () => {
  const { title, description, categories, images } = data.gallery;
  const galleryCategories = categories.map((cat) => cat.name);
  const galleryImages = images.map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
    category: img.category,
  }));

  const [selectedCategory, setSelectedCategory] = useState(
    galleryCategories[0]
  );
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Đặt isVisible thành true ngay lập tức để hiển thị ảnh
    setIsVisible(true);
    
    const section = sectionRef.current;
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

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === galleryCategories[0]) {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((image) => image.category === selectedCategory)
      );
    }
    galleryImages.filter((image) => image.category === selectedCategory);
  }, [selectedCategory, galleryCategories, galleryImages]);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {galleryCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full transition-all text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 transition-all duration-1000"
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square min-h-[250px]"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
                loading="eager"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button
                  onClick={() => openLightbox(image.id)}
                  className="bg-white/90 text-secondary p-2 sm:p-3 rounded-full hover:bg-white transition-all duration-300"
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
                    sizes="100vw"
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
