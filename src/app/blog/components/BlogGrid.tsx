'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const achievements = [

  {
    id: 2,
    title: 'Pitching & nhận được sự công nhận từ nhà trường',
    excerpt:
      'EggPorce đã nhận được sự công nhận và hỗ trợ từ Trường Đại học FPT Cần Thơ để tiếp tục phát triển dự án.',
    date: 'Pitching',
    icon: 'PresentationChartBarIcon',
    image: '/assets/images/anh24.jpg',
    alt: 'Pitching dự án EGGPORCE'
  },
  {
    id: 3,
    title: 'Ra mắt 5 dòng sản phẩm đầu tiên',
    excerpt:
      'Ra mắt móc khóa, hũ trứng, khay/dĩa, chậu cây mini và bình hoa từ vỏ trứng tái chế.',
    date: 'Ra mắt sản phẩm',
    icon: 'GiftIcon',
    image: '/assets/images/anh1.png',
    alt: 'Sản phẩm đầu tiên của EGGPORCE'
  },
  {
    id: 4,
    title: 'Bán hàng thực tế tại FPT Open Day',
    excerpt:
      'Tiếp cận khách hàng trực tiếp, ghi nhận phản hồi và kiểm chứng mức độ phù hợp với thị trường.',
    date: 'Open Day',
    icon: 'ShoppingBagIcon',
    image: '/assets/images/anh25.jpg',
    alt: 'EGGPORCE tại FPT Open Day'
  },
  {
    id: 5,
    title: 'Chuyển giao công thức cho cộng đồng',
    excerpt:
      'Hướng dẫn và chuyển giao công thức cho Hội Bảo trợ Người khuyết tật, trẻ mồ côi và bệnh nhân nghèo TP. Cần Thơ.',
    date: 'Cộng đồng',
    icon: 'HeartIcon',
    image: '/assets/images/anh23.jpg',
    alt: 'Hoạt động cộng đồng của EGGPORCE'
  },
  {
    id: 6,
    title: 'Đăng ký thành lập công ty',
    excerpt:
      'Đánh dấu bước chuyển từ dự án sinh viên sang mô hình hoạt động chuyên nghiệp hơn.',
    date: 'Doanh nghiệp',
    icon: 'BuildingOfficeIcon',
    image: '/assets/images/anh22.png',
    alt: 'Cột mốc thành lập công ty'
  },
  {
    id: 7,
    title: 'Đài truyền hình Cần Thơ 2 ghi hình và lan tỏa',
    excerpt:
      'Dự án được ghi hình và chia sẻ trên nền tảng “Miền gạo trắng nước trong”, giúp lan tỏa rộng rãi hơn.',
    date: 'Truyền thông',
    icon: 'TvIcon',
    video: '/assets/videos/cantho2.mp4',
    alt: 'EGGPORCE trên truyền hình'
  },
  {
    id: 8,
    title: 'Báo Thanh Niên ghi hình và lan tỏa',
    excerpt:
      'Dự án được ghi hình và chia sẻ trên "Cùng Sống Xanh" số 149, giúp lan tỏa rộng rãi hơn.',
    date: 'Truyền thông',
    icon: 'TvIcon',
    video: '/assets/videos/thanhnien.mp4',
    alt: 'EGGPORCE trên Báo Thanh Niên'
  }
];

export default function BlogGrid() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image / Video */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.video ? (
                  <video
                    preload="metadata"
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                ) : (
                  <AppImage
                    src={item.image!}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-semibold inline-flex items-center gap-1">
                    <Icon name={item.icon} size={12} />
                    {item.date}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-display font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.excerpt}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}