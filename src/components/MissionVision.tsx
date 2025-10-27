'use client';

import React from 'react';
import data from '@/data/data.json';

const MissionVision = () => {
  const { mission, vision } = data.missionVision;

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Sứ mệnh & Tầm nhìn
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sứ mệnh */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {mission.title}
              </h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {/* <p className="mb-4">{mission.description}</p> */}
              {mission.keyPoints.map((point, index) => (
                <p key={index} className="flex items-start">
                  <span
                    className={`${
                      index % 2 === 0 ? 'text-secondary' : 'text-amber-600'
                    } font-bold mr-2`}
                  >
                    •
                  </span>
                  {point}
                </p>
              ))}
            </div>
          </div>

          {/* Tầm nhìn */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {vision.title}
              </h3>
            </div>
            <div className="text-gray-700 leading-relaxed">
              {/* <p className="mb-4">{vision.description}</p> */}
              <div className="space-y-2">
                {vision.keyPoints.map((point, index) => (
                  <p key={index} className="flex items-start">
                    <span
                      className={`${
                        index % 2 === 0 ? 'text-secondary' : 'text-amber-600'
                      } font-bold mr-2`}
                    >
                      •
                    </span>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
