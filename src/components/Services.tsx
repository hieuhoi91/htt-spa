'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Chăm Sóc Da Mặt',
    description: 'Các liệu trình chăm sóc da chuyên sâu giúp làn da của bạn trở nên tươi sáng, mịn màng và khỏe mạnh.',
    image: '/assets/service-facial.jpg',
    icon: '/assets/icons/facial-icon.svg',
    features: ['Làm sạch sâu', 'Trẻ hóa da', 'Điều trị mụn', 'Dưỡng ẩm'],
    price: 'Từ 350.000đ',
    link: '/services/facial'
  },
  {
    id: 2,
    title: 'Massage Trị Liệu',
    description: 'Kỹ thuật massage độc đáo giúp thư giãn cơ thể, giảm căng thẳng và cải thiện tuần hoàn máu.',
    image: '/assets/service-massage.jpg',
    icon: '/assets/icons/massage-icon.svg',
    features: ['Giảm đau nhức', 'Thư giãn', 'Cải thiện tuần hoàn', 'Detox cơ thể'],
    price: 'Từ 450.000đ',
    link: '/services/massage'
  },
  {
    id: 3,
    title: 'Triệt Lông Công Nghệ Cao',
    description: 'Công nghệ triệt lông hiện đại, an toàn và hiệu quả giúp bạn tự tin với làn da mịn màng.',
    image: '/assets/service-hair-removal.jpg',
    icon: '/assets/icons/hair-removal-icon.svg',
    features: ['Không đau', 'Hiệu quả lâu dài', 'An toàn', 'Phù hợp mọi loại da'],
    price: 'Từ 500.000đ',
    link: '/services/hair-removal'
  },
  {
    id: 4,
    title: 'Chăm Sóc Cơ Thể',
    description: 'Các liệu trình chăm sóc toàn diện giúp cơ thể khỏe mạnh, săn chắc và rạng rỡ từ bên trong.',
    image: '/assets/service-body.jpg',
    icon: '/assets/icons/body-icon.svg',
    features: ['Tẩy tế bào chết', 'Giảm mỡ', 'Săn chắc da', 'Dưỡng ẩm toàn thân'],
    price: 'Từ 600.000đ',
    link: '/services/body'
  },
  {
    id: 5,
    title: 'Điều Trị Nám Sắc Tố',
    description: 'Phương pháp điều trị nám hiện đại giúp làm mờ và ngăn ngừa sắc tố không đều trên da.',
    image: '/assets/service-pigmentation.jpg',
    icon: '/assets/icons/pigmentation-icon.svg',
    features: ['Làm mờ nám', 'Đều màu da', 'Ngăn ngừa tái phát', 'An toàn'],
    price: 'Từ 800.000đ',
    link: '/services/pigmentation'
  },
  {
    id: 6,
    title: 'Phun Xăm Thẩm Mỹ',
    description: 'Kỹ thuật phun xăm hiện đại giúp tạo nên đường nét tự nhiên, tinh tế cho khuôn mặt.',
    image: '/assets/service-microblading.jpg',
    icon: '/assets/icons/microblading-icon.svg',
    features: ['Phun môi', 'Phun mày', 'Phun mí', 'Điêu khắc chân mày'],
    price: 'Từ 1.200.000đ',
    link: '/services/microblading'
  }
];

const Services = () => {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 bg-secondary/5 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 drop-shadow-sm">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Her S Spa Hoa Thạch Thảo cung cấp các dịch vụ chăm sóc sắc đẹp cao
            cấp, được thực hiện bởi đội ngũ chuyên gia giàu kinh nghiệm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow-md">{service.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{service.price}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 drop-shadow-sm">
                    Đặc điểm nổi bật:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-secondary/80 hover:to-primary/80"
          >
            Xem tất cả dịch vụ
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
