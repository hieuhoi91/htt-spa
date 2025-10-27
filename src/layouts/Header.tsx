'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import data from '@/data/data.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logo, logoAlt, slogan, navigation, contactInfo } = data.header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Thêm effect để chặn cuộn khi menu mobile được mở
  useEffect(() => {
    if (isMenuOpen) {
      // Chặn cuộn trang
      document.body.style.overflow = 'hidden';
    } else {
      // Cho phép cuộn trang trở lại
      document.body.style.overflow = 'auto';
    }

    // Cleanup khi component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    if (href === '/' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Hotline: {contactInfo.phone}</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>75 Bis, Thạch Thị Thanh, Tân Định, TPHCM</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Giờ mở cửa: 9:00 - 19:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src={logo}
                alt={logoAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-secondary">
                Hoa Thạch Thảo
              </h1>
              <p className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                {slogan}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item: { title: string; href: string }) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-secondary font-medium transition-colors duration-200 relative group`}
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full font-medium hover:from-secondary/80 hover:to-primary/80 transition-all duration-200 shadow-lg hover:shadow-xl">
              Đặt lịch ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg border">
            <div className="flex flex-col space-y-4 px-4">
              {navigation.map((item: { title: string; href: string }) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 hover:text-secondary font-medium py-2 transition-colors duration-200"
                >
                  {item.title}
                </button>
              ))}
              <button className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-full font-medium hover:from-secondary/80 hover:to-primary/80 transition-all duration-200 shadow-lg mt-4">
                Đặt lịch ngay
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
