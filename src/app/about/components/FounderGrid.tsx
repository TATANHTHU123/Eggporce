'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

const founders = [
  {
    name: 'Anh Thư',
    role: 'CEO & CTO',
    desc: 'Định hướng chiến lược tổng thể của EGGPORCE, quản lý hoạt động doanh nghiệp và phát triển các giải pháp công nghệ.',
    image: '/assets/images/anh.png',
  },
  {
    name: 'Dương Tuấn',
    role: 'CFO',
    desc: 'Quản lý tài chính, ngân sách, dòng tiền và xây dựng kế hoạch tài chính nhằm đảm bảo sự phát triển bền vững của dự án.',
    image: '/assets/images/anh.png',
  },
  {
    name: 'Thùy Dương',
    role: 'CMO',
    desc: 'Xây dựng chiến lược marketing, truyền thông thương hiệu và triển khai các hoạt động quảng bá sản phẩm đến khách hàng.',
    image: '/assets/images/anh.png',
  },
  {
    name: 'Trân Châu',
    role: 'CPO',
    desc: 'Phụ trách nghiên cứu, phát triển và hoàn thiện sản phẩm, đảm bảo chất lượng và trải nghiệm khách hàng.',
    image: '/assets/images/anh.png',
  },
  {
    name: 'Bảo Trân',
    role: 'COO',
    desc: 'Điều phối hoạt động vận hành, kiểm soát quy trình xử lý hồ sơ, giấy tờ, hóa đơn và các công việc nội bộ.',
    image: '/assets/images/anh.png',
  },
];

export default function FounderGrid() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-5 inline-flex">
            Leadership Team
          </span>

          <h2 className="text-5xl font-display font-medium mb-5">
            Meet Our Team
          </h2>

          <p className="text-muted-foreground text-lg">
            Đội ngũ sáng lập và điều hành dự án EGGPORCE
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl overflow-hidden shadow-xl group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <AppImage
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {founder.name}
                </h3>

                <p className="text-accent font-semibold uppercase tracking-wide mb-4">
                  {founder.role}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {founder.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}