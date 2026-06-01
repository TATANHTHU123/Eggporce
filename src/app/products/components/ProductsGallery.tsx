'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const galleryImages = [
  {
    id: 1,
    src: "/assets/images/anh13.jpg",
    alt: 'Khách hàng chia sẻ sản phẩm gốm vỏ trứng trong không gian sống thực tế',
    span: 'lg:col-span-2 lg:row-span-2',
    caption: 'Feedback từ khách hàng sau khi sử dụng'
  },
  {
    id: 2,
    src: "/assets/images/anh14.jpg",
    alt: 'Khách hàng chụp bộ sưu tập gốm vỏ trứng EGGPORCE tại nhà',
    span: '',
    caption: 'Khách hàng yêu thích bộ sưu tập gốm trứng'
  },
  {
    id: 3,
    src: "/assets/images/anh15.jpg",
    alt: 'Hình ảnh feedback cận cảnh chi tiết vân gốm vỏ trứng từ khách hàng',
    span: '',
    caption: 'Mỗi sản phẩm đều có nét riêng'
  },
  {
    id: 4,
    src: "/assets/images/anh16.jpg",
    alt: 'Khách hàng trang trí lọ hoa gốm vỏ trứng trong không gian sống',
    span: '',
    caption: 'Góc decor từ khách hàng'
  },
  {
    id: 5,
    src: "/assets/images/anh17.png",
    alt: 'Khách hàng sử dụng tách trà gốm vỏ trứng trong đời sống hàng ngày',
    span: '',
    caption: 'Feedback trải nghiệm thực tế'
  },
];

export default function ProductsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  // FIX navigate
  const navigate = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;

    const newIndex =
      (lightboxIndex + dir + galleryImages.length) % galleryImages.length;

    setLightboxIndex(newIndex);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

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
      { threshold: 0.08 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal-item');

    els?.forEach((el) => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentImage =
    lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal-item space-y-4">
          <span className="section-label mx-auto inline-flex">
            <Icon name="PhotoIcon" size={14} className="text-accent" />
            Thư viện ảnh
          </span>

          <h2 className="text-section-lg font-display font-medium text-foreground">
            Vẻ đẹp từ{' '}
            <span className="italic text-accent">vỏ trứng.</span>
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto">
            Từ vỏ trứng đến vật dụng trong nhà bạn — hành trình của từng tác phẩm gốm vỏ trứng.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[260px] lg:auto-rows-[320px]">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              onClick={() => openLightbox(i)}
              className={`reveal-item relative overflow-hidden rounded-2xl cursor-pointer group img-zoom ${img.span}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-sm font-medium leading-snug">
                  {img.caption}
                </p>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-background/70 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon
                  name="MagnifyingGlassPlusIcon"
                  size={16}
                  className="text-foreground"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {currentImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Đóng"
            >
              <Icon name="XMarkIcon" size={20} className="text-white" />
            </button>

            {/* Image FIX */}
            <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden flex items-center justify-center">
              <AppImage
                key={currentImage.id}
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={1600}
                className="max-w-full max-h-full object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Caption + Nav */}
            <div className="flex items-center justify-between mt-4 px-1">
              <div>
                <p className="text-white font-medium">
                  {currentImage.caption}
                </p>
                <p className="text-white/50 text-sm mt-0.5">
                  {(lightboxIndex ?? 0) + 1} / {galleryImages.length}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="p-3 rounded-full bg-white/10 hover:bg-accent transition-colors text-white"
                  aria-label="Ảnh trước"
                >
                  <Icon
                    name="ChevronLeftIcon"
                    size={18}
                    className="text-white"
                  />
                </button>

                <button
                  onClick={() => navigate(1)}
                  className="p-3 rounded-full bg-white/10 hover:bg-accent transition-colors text-white"
                  aria-label="Ảnh sau"
                >
                  <Icon
                    name="ChevronRightIcon"
                    size={18}
                    className="text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}