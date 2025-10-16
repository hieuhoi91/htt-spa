'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Chuyên Gia Giàu Kinh Nghiệm',
    description:
      'Đội ngũ chuyên gia của chúng tôi được đào tạo bài bản và có nhiều năm kinh nghiệm trong lĩnh vực chăm sóc sắc đẹp.',
    icon: '/assets/icons/expert.svg',
  },
  {
    id: 2,
    title: 'Công Nghệ Hiện Đại',
    description:
      'Chúng tôi sử dụng các công nghệ và thiết bị hiện đại nhất, đảm bảo hiệu quả tối ưu cho mọi liệu trình.',
    icon: '/assets/icons/technology.svg',
  },
  {
    id: 3,
    title: 'Sản Phẩm Cao Cấp',
    description:
      'Chỉ sử dụng các sản phẩm chăm sóc da cao cấp, an toàn và được chứng nhận từ các thương hiệu uy tín.',
    icon: '/assets/icons/product.svg',
  },
  {
    id: 4,
    title: 'Không Gian Thư Giãn',
    description:
      'Không gian spa được thiết kế tinh tế, tạo cảm giác thư thái và thoải mái trong suốt quá trình trải nghiệm.',
    icon: '/assets/icons/space.svg',
  },
  {
    id: 5,
    title: 'Dịch Vụ Cá Nhân Hóa',
    description:
      'Mỗi liệu trình đều được điều chỉnh phù hợp với nhu cầu và tình trạng cụ thể của từng khách hàng.',
    icon: '/assets/icons/personalized.svg',
  },
  {
    id: 6,
    title: 'Kết Quả Rõ Rệt',
    description:
      'Cam kết mang đến kết quả rõ rệt và lâu dài, giúp khách hàng tự tin và hài lòng với diện mạo của mình.',
    icon: '/assets/icons/results.svg',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Minh',
    avatar: '/assets/testimonial-1.jpg',
    rating: 5,
    comment:
      'Tôi đã trải nghiệm dịch vụ chăm sóc da tại Her S Spa và thực sự ấn tượng với kết quả. Làn da của tôi trở nên tươi sáng và khỏe mạnh hơn rất nhiều.',
    service: 'Chăm sóc da mặt',
  },
  {
    id: 2,
    name: 'Trần Văn Hùng',
    avatar: '/assets/testimonial-2.jpg',
    rating: 5,
    comment:
      'Massage trị liệu tại đây thực sự tuyệt vời. Các chuyên viên rất chuyên nghiệp và kỹ thuật massage giúp tôi giảm đau nhức hiệu quả.',
    service: 'Massage trị liệu',
  },
  {
    id: 3,
    name: 'Lê Thị Hương',
    avatar: '/assets/testimonial-3.jpg',
    rating: 5,
    comment:
      'Dịch vụ triệt lông công nghệ cao tại Her S Spa rất hiệu quả và không gây đau đớn. Tôi rất hài lòng với kết quả và sẽ tiếp tục sử dụng dịch vụ.',
    service: 'Triệt lông',
  },
];

const Whysochoose = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="py-16 bg-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Tại Sao Chọn Her S Spa?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm chăm sóc sắc đẹp tuyệt vời
            nhất với đội ngũ chuyên gia và công nghệ hiện đại
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

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
                      "{testimonial.comment}"
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
                src="/assets/spa-experience.jpg"
                alt="Spa Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-lg max-w-xs text-center">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Trải Nghiệm Ngay
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Đặt lịch hẹn ngay hôm nay để trải nghiệm dịch vụ chăm sóc
                    sắc đẹp tuyệt vời tại Her S Spa
                  </p>
                  <a
                    href="#booking"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-secondary to-primary text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Đặt Lịch Ngay
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

export default Whysochoose;
