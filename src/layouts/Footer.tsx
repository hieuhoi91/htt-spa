'use client';

import React from 'react';
import { Mail, MapPin, PhoneIcon } from 'lucide-react';

import { FaTiktok, FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import data from '@/data/data.json';

const Footer = () => {
  const {
    logo,
    logoAlt,
    description,
    socialMedia,
    contact,
    copyright,
    backgroundImage,
    newsletter,
  }: {
    logo: string;
    logoAlt: string;
    description: string;
    socialMedia: { platform: string; url: string; icon: string }[];
    contact: {
      address: string;
      phone: string;
      email: string;
      website: string;
      workingHours: string;
    };
    copyright: string;
    backgroundImage: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      buttonText: string;
    };
  } = data.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-secondary/30 to-primary/20 pt-16 pb-8">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('${backgroundImage || '/assets/footer.jpg'}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <Image
                src={logo}
                alt={logoAlt || 'Her S Spa Logo'}
                width={160}
                height={60}
                className="h-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-gray-600 mb-6 break-words text-sm md:text-base">
              {description}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socialMedia &&
                socialMedia.map(
                  (
                    social: {
                      platform: string;
                      url: string;
                      icon: string;
                    },
                    index: number
                  ) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={social.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon === 'facebook' && (
                        <FaFacebookF className="w-5 h-5" />
                      )}
                      {social.icon === 'tiktok' && (
                        <FaTiktok className="w-5 h-5" />
                      )}
                    </a>
                  )
                )}
            </div>
          </div>

          {/* Column 2 - Quick Links
          <div>
            <h3 className="text-xl font-bold text-secondary mb-6">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-3">
              {quickLinks &&
                quickLinks.map(
                  (
                    link: { id: number; title: string; url: string },
                    index: number
                  ) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-gray-600 hover:text-primary transition-colors flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {link.title}
                      </a>
                    </li>
                  )
                )}
            </ul>
          </div> */}

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-6">Liên Hệ</h3>
            <ul className="space-y-4">
              {contact.address && (
                <li className="flex items-start">
                  <MapPin className="text-primary mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{contact.address}</span>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-center">
                  <PhoneIcon className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-600">{contact.phone}</span>
                </li>
              )}
              {contact.email && (
                <li className="flex items-center">
                  <Mail className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-600">{contact.email}</span>
                </li>
              )}
              {contact.workingHours && (
                <li className="flex items-start">
                  <svg
                    className="text-primary mr-3 h-5 w-5 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">{contact.workingHours}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="col-span-2">
            {newsletter && (
              <div className="max-w-xl mx-auto text-center">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {newsletter.title}
                </h3>
                <p className="text-gray-600 mb-6">{newsletter.description}</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder={newsletter.placeholder || 'Nhập email của bạn'}
                    className="px-4 py-3 rounded-lg flex-grow bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    {newsletter.buttonText || 'Đăng Ký'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>{copyright.replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
