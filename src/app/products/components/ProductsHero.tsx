import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ProductsHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-secondary/30 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 blob-secondary opacity-40 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <span className="section-label mx-auto mb-6 inline-flex">
          <Icon name="SparklesIcon" size={14} className="text-accent" />
          Bộ sưu tập 2026
        </span>
        <h1 className="text-section-lg font-display font-medium text-foreground mb-6">
          Gốm từ{' '}
          <span className="italic text-accent">vỏ trứng</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Từ phụ kiện nhỏ đến sản phẩm trang trí không gian — EGGPORCE biến vỏ trứng tái chế thành những món đồ mang tính thẩm mỹ, ứng dụng và dấu ấn riêng.
        </p>
      </div>
    </section>
  );
}