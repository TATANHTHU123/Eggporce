'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function BlogHero() {
  return (
    <section className="relative pt-28 pb-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/40 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-25 pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Page title */}
        <div className="text-center mb-14 space-y-5">
          <span className="section-label mx-auto inline-flex">
            <Icon name="TrophyIcon" size={14} className="text-accent" />
            Hành trình EGGPORCE
          </span>

          <h1 className="text-section-lg font-display font-medium text-foreground">
            Những cột mốc{' '}
            <span className="italic text-accent">đáng nhớ</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Từ một ý tưởng sinh viên đến hành trình thương mại hóa, lan tỏa cộng đồng và phát triển thành doanh nghiệp.
          </p>
        </div>

        {/* Featured Hero */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl">
          <AppImage
            src="/assets/images/anh12.png"
            alt="Hành trình phát triển dự án EGGPORCE"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-foreground/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Cột mốc nổi bật
              </span>
              <span className="text-white/60 text-sm">
                Từ dự án sinh viên đến doanh nghiệp
              </span>
            </div>

            <h2 className="text-card-lg font-display font-medium text-white max-w-2xl leading-tight mb-4">
              EggPorce — hành trình tái tạo giá trị từ những điều bị bỏ quên
            </h2>

            <p className="text-white/75 max-w-xl leading-relaxed hidden md:block">
              Bắt đầu từ vỏ trứng bị thải bỏ, EGGPORCE đã tạo nên những sản phẩm thủ công mang giá trị thẩm mỹ, ứng dụng và bền vững.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}