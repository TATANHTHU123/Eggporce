'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const posts = [
  {
    id: 1,
    title: 'Ra mắt 5 dòng sản phẩm đầu tiên',
    excerpt:
      'Ra mắt móc khóa, hũ trứng, khay/dĩa, chậu cây mini và bình hoa từ vỏ trứng tái chế.',
    category: 'Sản phẩm',
    date: 'Ra mắt sản phẩm',
    image: '/assets/images/anh1.png',
    alt: 'Sản phẩm đầu tiên của EGGPORCE',
    featured: true
  },
  {
    id: 2,
    title: 'Pitching & nhận được sự công nhận từ nhà trường',
    excerpt:
      'EggPorce đã nhận được sự công nhận và hỗ trợ từ Trường Đại học FPT Cần Thơ để tiếp tục phát triển dự án.',
    category: 'Cột mốc',
    date: 'Pitching',
    image: '/assets/images/anh24.jpg',
    alt: 'Pitching dự án EGGPORCE',
    featured: false
  },
  {
    id: 5,
    title: 'Chuyển giao công thức cho cộng đồng',
    excerpt:
      'Hướng dẫn và chuyển giao công thức cho Hội Bảo trợ Người khuyết tật, trẻ mồ côi và bệnh nhân nghèo TP. Cần Thơ.',
    category: 'Cột mốc',
    date: 'Cộng đồng',
    image: '/assets/images/anh23.jpg',
    alt: 'Hoạt động cộng đồng của EGGPORCE'
  },
];

const categoryColors: Record<string, string> = {
  'Sản phẩm': 'bg-accent/15 text-accent-foreground',
  'Cột mốc': 'bg-primary/10 text-primary',
  'Truyền thông': 'bg-secondary text-secondary-foreground'
};

export default function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add(
              'reveal-up',
              'transition-all',
              'duration-700'
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 reveal-item">
          <div className="space-y-4">
            <span className="section-label">
              <Icon name="SparklesIcon" size={14} className="text-accent" />
              Thành tựu nổi bật
            </span>

            <h2 className="text-section-lg font-display font-medium text-foreground">
              Hành trình{' '}
              <span className="italic text-accent">EGGPORCE.</span>
            </h2>
          </div>

          <Link href="/blog" className="btn-outline group inline-flex">
            Xem tất cả
            <Icon
              name="ArrowRightIcon"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <Link
            href="/blog"
            className="blog-card lg:col-span-2 reveal-item group"
            style={{ transitionDelay: '80ms' }}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <AppImage
                src={posts[0].image}
                alt={posts[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[posts[0].category]}`}
                >
                  {posts[0].category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-white/70 text-sm mb-2">{posts[0].date}</p>
                <h3 className="text-card-lg font-display font-medium text-white leading-tight">
                  {posts[0].title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {posts[0].excerpt}
              </p>

              <div className="flex items-center gap-2 mt-4 text-accent font-medium text-sm">
                Xem chi tiết
                <Icon
                  name="ArrowRightIcon"
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>

          {/* Secondary */}
          <div className="flex flex-col gap-6">
            {posts.slice(1).map((post, i) => (
              <Link
                href="/blog"
                key={post.id}
                className="blog-card reveal-item group flex flex-col"
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-xs mb-2">
                    {post.date}
                  </p>

                  <h3 className="font-display font-medium text-foreground leading-snug flex-1">
                    {post.title}
                  </h3>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}