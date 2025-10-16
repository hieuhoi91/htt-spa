'use client';

import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-muted/10">
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
                Sứ mệnh
              </h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="flex items-start">
                <span className="text-secondary font-bold mr-2">•</span>
                Mang đến trải nghiệm làm đẹp thư giãn, nhẹ nhàng, như một khoảng
                nghỉ tinh thần cho khách hàng.
              </p>
              <p className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                Giúp mỗi người phụ nữ chủ động chăm sóc bản thân bằng thiết bị
                thông minh, liệu trình khoa học và app cá nhân hóa.
              </p>
              <p className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                Tạo cơ hội kinh doanh bền vững cho những ai yêu làm đẹp, với mô
                hình nhượng quyền tối ưu chi phí.
              </p>
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
                Tầm nhìn
              </h3>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Her S Spa Hoa Thạch Thảo mong muốn trở thành{' '}
                <strong className="text-secondary">
                  hệ sinh thái làm đẹp đáng tin cậy
                </strong>
                , giúp mỗi phụ nữ hiện đại có thể tự tin chăm sóc sắc đẹp và sức
                khỏe ngay tại nhà.
              </p>
              <p className="mb-4">
                Chúng tôi không ngừng phát triển dịch vụ, sản phẩm, thiết bị
                thông minh và mô hình nhượng quyền dễ vận hành, để lan tỏa lối
                sống làm đẹp an toàn, thư giãn, chủ động đến nhiều người hơn.
              </p>
            </div>
          </div>
        </div>

        {/* Dịch vụ chủ chốt */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Dịch vụ chủ chốt
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Chăm sóc da chuyên sâu',
                icon: '✨',
                description: 'Liệu trình chăm sóc da khoa học, an toàn',
              },
              {
                title: 'Trẻ hóa da, nâng cơ',
                icon: '💫',
                description: 'Công nghệ hiện đại cho làn da trẻ trung',
              },
              {
                title: 'Phục hồi cổ vai gáy',
                icon: '🧘‍♀️',
                description: 'Thư giãn, giảm căng thẳng cơ bắp',
              },
              {
                title: 'Giảm mỡ, săn chắc da',
                icon: '💪',
                description: 'Làm đẹp vóc dáng, tăng cường sức khỏe',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-bold text-secondary mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
