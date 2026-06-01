'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef?.current) return;
      const scrollY = window.scrollY;
      const blur = Math.min(scrollY / 50, 14);
      const brightness = Math.max(1 - scrollY / 1200, 0.6);
      const scale = 1 + scrollY / 4000;
      bgRef.current.style.filter = `blur(${blur}px) brightness(${brightness})`;
      bgRef.current.style.transform = `scale(${scale})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image with scroll blur */}
      <div ref={bgRef} className="absolute inset-0 z-0 transition-none will-change-transform">
        <AppImage
          src="/assets/images/anh1.png"
          alt="Xưởng thủ công gốm vỏ trứng với ánh sáng tự nhiên ấm áp, các tác phẩm gốm tinh xảo trên bàn làm việc"
          fill
          priority
          className="object-cover"
          sizes="100vw" />

        {/* Gradient scrim — dark enough for white text */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>
      {/* Noise texture */}
      <div className="absolute inset-0 z-[1] noise-overlay" />
      {/* Animated blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 blob-primary pulse-soft z-[1]" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 blob-secondary pulse-soft z-[1]" style={{ animationDelay: '2s' }} />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full py-20">
        {/* Left: Typography */}
        <div className="space-y-8">
          <div
            className="section-label text-[#8B5E2E] bg-accent/20 border border-accent/30 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5E2E] animate-pulse" />
            Gốm — Vỏ Trứng — Nghệ Thuật
          </div>

          <h1
            className="text-hero-xl font-sans font-medium text-white opacity-0 animate-slide-in-left"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>

            Vẻ đẹp từ{' '}
            <span className="italic text-accent">
              vỏ trứng tái sinh
            </span>
          </h1>

          <p
            className="text-lg text-white/80 max-w-md leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>

            EggPorce là dự án khởi nghiệp sáng tạo tập trung nghiên cứu và phát triển các sản phẩm từ vỏ trứng tái chế. Từ một phụ phẩm thường bị thải bỏ, chúng mình tạo nên những sản phẩm mang tính thẩm mỹ, ứng dụng và giá trị bền vững. EggPorce không chỉ làm handmade, mà đang theo đuổi một hướng đi xanh bằng tư duy đổi mới và tái tạo giá trị từ vật liệu tưởng chừng vô dụng.

          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>

            <Link href="/products" className="btn-primary group">
              Xem bộ sưu tập
              <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/blog" className="btn-outline border-white/50 text-white hover:bg-white/10 hover:text-white">
              Đọc câu chuyện
            </Link>
          </div>


        </div>

        {/* Right: Hero image card */}
        <div
          className="relative opacity-0 animate-slide-in-right"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}>

          {/* Spinning dashed ring */}
          <div className="absolute inset-[-20px] rounded-3xl border-2 border-dashed border-accent/25 spin-slow" />

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
            <AppImage
              src="/assets/images/anh4.png"
              alt="Mang phong cách tối giản, phù hợp để cắm hoa khô/tươi và trang trí không gian theo hướng tinh tế, hiện đại"
              fill
              priority
              className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw" />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />

            {/* Floating glass card */}
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-accent font-display italic text-lg">Sản phẩm nổi bật</p>
                  <p className="text-foreground font-sans font-semibold text-xl">Bình hoa tĩnh phương</p>
                  <p className="text-muted-foreground text-sm mt-1">Mang phong cách tối giản, phù hợp để cắm hoa khô/tươi và trang trí không gian theo hướng tinh tế, hiện đại</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
        <span className="text-xs text-white/60 uppercase tracking-widest"></span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>);

}