import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function VisionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <AppImage
            src="/assets/images/anh.png"
            alt="Vision"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="section-label mb-5 inline-flex">
            Our Vision
          </span>

          <h2 className="text-5xl font-display font-medium mb-8">
            Smart Digital Ecosystem
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Chúng tôi tin rằng công nghệ không chỉ là công cụ mà còn là
            nền tảng giúp kết nối con người, sáng tạo và tương lai.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            EGGPORCE được xây dựng với mục tiêu tạo ra hệ sinh thái số
            hiện đại, trực quan và có tính ứng dụng thực tế cao.
          </p>
        </div>

      </div>
    </section>
  );
}