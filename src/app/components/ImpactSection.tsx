'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
  {
    value: 20.3,
    suffix: ' tỷ',
    label: 'Quả trứng/năm tại Việt Nam',
    icon: 'SparklesIcon',
  },
  {
    value: 55.6,
    suffix: ' triệu',
    label: 'Quả trứng/ngày',
    icon: 'ArrowPathIcon',
  },
  {
    value: 278,
    suffix: '–334 tấn',
    label: 'Vỏ trứng thải ra mỗi ngày',
    icon: 'GlobeAltIcon',
  },
  {
    value: 1,
    suffix: ' ý tưởng',
    label: 'Biến rác thải thành nghệ thuật',
    icon: 'HeartIcon',
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  active,
}: {
  stat: typeof stats[0];
  active: boolean;
}) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <div className="text-center space-y-2 p-6 rounded-2xl bg-secondary/60 border border-border hover:bg-secondary transition-colors duration-300">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 mb-3">
        <Icon
          name={stat.icon as Parameters<typeof Icon>[0]['name']}
          size={22}
          className="text-accent"
        />
      </div>

      <p className="text-4xl font-display font-semibold text-primary">
        {count}
        {stat.suffix}
      </p>

      <p className="text-sm text-muted-foreground uppercase tracking-widest leading-relaxed">
        {stat.label}
      </p>
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/40 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-primary opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-secondary opacity-50 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image mosaic */}
          <div
            className={`relative transition-all duration-1000 ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="absolute inset-[-16px] rounded-full border-2 border-dashed border-accent/20 spin-slow pointer-events-none" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <AppImage
                    src="/assets/images/anh10.png"
                    alt="Sản phẩm gốm EggPorce"
                    fill={false}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <AppImage
                    src="/assets/images/anh5.png"
                    alt="Sản phẩm gốm EggPorce"
                    fill={false}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-10">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <AppImage
                    src="/assets/images/anh2.png"
                    alt="Sản phẩm gốm EggPorce"
                    fill={false}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <AppImage
                    src="/assets/images/anh7.png"
                    alt="Sản phẩm gốm EggPorce"
                    fill={false}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-8 -right-6 glass-card rounded-2xl px-5 py-4 shadow-xl hidden lg:block float-gentle">
              <p className="font-display italic text-accent text-2xl">
                From Waste
              </p>
              <p className="text-sm text-muted-foreground">to Wonder</p>
            </div>
          </div>

          {/* Right */}
          <div
            className={`space-y-10 transition-all duration-1000 delay-200 ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-5">
              <span className="section-label">
                <Icon
                  name="GlobeAltIcon"
                  size={14}
                  className="text-accent"
                />
                Tác động thực tế
              </span>

              <h2 className="text-section-lg font-display font-medium text-foreground">
                Mỗi sản phẩm là một{' '}
                <span className="italic text-accent">
                  hành động xanh.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Năm 2024, Việt Nam sản xuất khoảng <strong>20,3 tỷ quả trứng</strong>,
                tương đương hơn <strong>55,6 triệu quả mỗi ngày</strong>.
                Với trọng lượng trung bình 5–6g/vỏ, ước tính có khoảng{' '}
                <strong>278 – 334 tấn vỏ trứng bị thải ra mỗi ngày</strong>.
                EggPorce chọn biến phần “bỏ đi” ấy thành những sản phẩm mang
                giá trị thẩm mỹ, ứng dụng và bền vững.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} active={visible} />
              ))}
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                'Tận dụng nguồn vỏ trứng tưởng chừng bị bỏ đi',
                'Biến chất thải thành sản phẩm thủ công mang giá trị',
                'Lan tỏa lối sống sáng tạo và bền vững',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      name="CheckIcon"
                      size={12}
                      className="text-accent"
                    />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}