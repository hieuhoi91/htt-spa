'use client';

import React, { useRef, useEffect, useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';
import { Star, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about-thumbnail.jpg"
            alt="Her S Spa Hoa Thạch Thảo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Her S Spa
              <span className="block text-accent">Hoa Thạch Thảo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Hệ sinh thái làm đẹp đáng tin cậy, mang đến trải nghiệm thư giãn
              và chăm sóc sắc đẹp chuyên nghiệp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-secondary/80 hover:to-primary/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                Khám phá dịch vụ
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Đặt lịch ngay
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section
        id="about"
        ref={sectionRef}
        className="py-16 md:py-20 bg-white relative scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Về Her S Spa Hoa Thạch Thảo
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi cam kết mang đến những trải nghiệm làm đẹp tuyệt vời,
              giúp bạn khám phá vẻ đẹp tự nhiên và tận hưởng những khoảnh khắc
              thư giãn quý giá.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, number: '500+', label: 'Khách hàng hài lòng' },
              { icon: Award, number: '5+', label: 'Năm kinh nghiệm' },
              { icon: Star, number: '4.9', label: 'Đánh giá trung bình' },
              { icon: Heart, number: '100%', label: 'Cam kết chất lượng' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Tại sao chọn Her S Spa?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Thiết bị thông minh & Công nghệ hiện đại
                    </h4>
                    <p className="text-gray-600">
                      Sử dụng những thiết bị làm đẹp tiên tiến nhất, đảm bảo
                      hiệu quả và an toàn tuyệt đối.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Liệu trình khoa học & Cá nhân hóa
                    </h4>
                    <p className="text-gray-600">
                      Mỗi khách hàng được thiết kế liệu trình riêng biệt phù hợp
                      với nhu cầu và tình trạng da.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Đội ngũ chuyên nghiệp
                    </h4>
                    <p className="text-gray-600">
                      Các chuyên viên được đào tạo bài bản, có kinh nghiệm và
                      tận tâm với nghề.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Môi trường thư giãn
                    </h4>
                    <p className="text-gray-600">
                      Không gian spa được thiết kế để mang lại cảm giác thư
                      giãn, thoải mái như ở nhà.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Images */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/about-gallery-1.jpg"
                      alt="Spa interior"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/about-gallery-2.jpg"
                      alt="Spa treatment"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/about-thumbnail.jpg"
                      alt="Spa experience"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/service-thumbnail.jpg"
                      alt="Spa services"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
