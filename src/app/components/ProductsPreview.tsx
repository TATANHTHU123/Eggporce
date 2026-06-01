'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const products = [
  {
    id: 1,
    name: 'Chậu cây mini dáng bầu',
    material:
      'Dùng để trồng sen đá và cây nhỏ, góp phần tạo điểm nhấn xanh cho bàn học, bàn làm việc hoặc không gian nội thất',
    price: '49,000đ',
    image: '/assets/images/anh10.png',
    alt: 'Can be used to grow succulents and small plants, adding a green accent to study desks, workspaces, or interior spaces',
    tag: 'Tối giản',
    span: 'col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 2,
    name: 'Bình hoa tĩnh phương',
    material:
      'Mang phong cách tối giản, phù hợp để cắm hoa khô/tươi và trang trí không gian theo hướng tinh tế, hiện đại',
    price: '129,000đ',
    image: '/assets/images/anh4.png',
    alt: 'Featuring a minimalist style, suitable for displaying dried/fresh flowers and decorating spaces with an elegant, modern touch',
    tag: 'Nổi bậc',
    span: 'col-span-1',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    name: 'Khay/dĩa họa tiết hoa hồng',
    material:
      'Trang trí đa năng, thích hợp để đựng trang sức hoặc các vật dụng nhỏ trong cuộc sống',
    price: '49,000đ',
    image: '/assets/images/anh5.png',
    alt: 'Versatile in use, also suitable for storing jewelry or small everyday items',
    tag: 'Đa năng',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 4,
    name: 'Hũ vỏ trứng',
    material:
      'Được thiết kế theo phong cách tối giản, phù hợp để lưu trữ phụ kiện nhỏ hoặc trang trí không gian sống',
    price: '59,000đ',
    image: '/assets/images/anh9.png',
    alt: 'Designed in a minimalist style, suitable for storing small accessories or decorating living spaces',
    tag: 'Độc đáo',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 5,
    name: 'Móc khóa',
    material:
      'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: '/assets/images/anh6.png',
    alt: 'Designed with a variety of mosaic patterns, serving as both a personal decorative accessory and a symbol of luck, growth, and individual style',
    tag: 'Yêu thích',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
];

export default function ProductsPreview() {
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const els = sectionRef?.current?.querySelectorAll('.reveal-item');
    els?.forEach((el) => {
      el?.classList?.add('reveal-hidden');
      observer?.observe(el);
    });

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 reveal-item">
          <div className="space-y-4">
            <span className="section-label">
              <Icon name="SparklesIcon" size={14} className="text-accent" />
              Bộ sưu tập
            </span>
            <h2 className="text-section-lg font-display font-medium text-foreground">
              Gốm từ <span className="italic text-accent">vỏ trứng.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Mỗi sản phẩm là một tác phẩm độc nhất — từ vỏ trứng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((product, i) => (
            <div
              key={product?.id}
              className={`reveal-item product-card group ${
                product?.span === 'col-span-2'
                  ? 'sm:col-span-2 lg:col-span-2'
                  : ''
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={`relative overflow-hidden ${product?.aspect}`}
              >
                <AppImage
                  src={product?.image}
                  alt={product?.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                {product?.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {product?.tag}
                  </div>
                )}

                {/* Hover overlay content (đã bỏ icon giỏ hàng) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-accent font-display italic text-sm mb-2">
                    {product?.material}
                  </p>

                  <p className="text-white text-xl font-semibold mb-2">
                    {product?.name}
                  </p>

                  <p className="text-white font-bold text-lg">
                    {product?.price}
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-5">
                <p className="font-semibold text-foreground">
                  {product?.name}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-muted-foreground">
                    {product?.material}
                  </p>
                  <p className="font-bold text-primary">{product?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal-item">
          <Link href="/products" className="btn-primary group inline-flex">
            Xem tất cả sản phẩm
            <Icon
              name="ArrowRightIcon"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}