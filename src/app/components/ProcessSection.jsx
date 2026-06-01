'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const processSteps = [
  {
    step: 'Bước 1',
    title: 'Thu gom',
    desc: 'Vỏ trứng được thu gom từ các hộ gia đình, quán ăn và tiệm bánh nhằm tận dụng nguồn phụ phẩm thường bị thải bỏ trong đời sống hằng ngày.',
    image: '/assets/images/anh19.png',
  },
  {
    step: 'Bước 2',
    title: 'Xử lý từ vỏ thành bột',
    desc: 'Vỏ trứng được rửa sạch, bóc màng, phơi khô, sấy và nghiền thành bột mịn để tạo nên nguồn vật liệu đầu vào cho sản phẩm.',
    image: '/assets/images/anh20.png',
  },
  {
    step: 'Bước 3',
    title: 'Làm sản phẩm',
    desc: 'Bột vỏ trứng được phối trộn cùng vật liệu khác, sau đó đổ khuôn và tạo hình sản phẩm thủ công.',
    image: '/assets/images/anh21.png',
  },
  {
    step: 'Bước 4',
    title: 'Trang trí hoàn thiện',
    desc: 'Sản phẩm được chà nhám, trang trí và xử lý bề mặt nhằm đảm bảo tính thẩm mỹ trước khi đến tay khách hàng.',
    image: '/assets/images/anh1.png',
  },
];

export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) =>
      prev === processSteps.length - 1 ? 0 : prev + 1
    );
  };

  const prevStep = () => {
    setCurrentStep((prev) =>
      prev === 0 ? processSteps.length - 1 : prev - 1
    );
  };

  // Auto slide mỗi 10 giây + reset khi currentStep đổi
  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mx-auto inline-flex mb-6">
            <Icon name="ArrowPathIcon" size={14} className="text-accent" />
            Quy trình thực hiện
          </span>

          <h2 className="text-section-lg font-display font-medium mb-6">
            Hành trình <span className="italic text-accent">tái sinh vỏ trứng</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mỗi bước là một phần trong hành trình biến vỏ trứng bỏ đi
            thành sản phẩm mang giá trị thẩm mỹ và bền vững.
          </p>
        </div>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${currentStep * 100}%)`,
            }}
          >
            {processSteps.map((item, index) => {
              const isActive = currentStep === index;

              return (
                <div
                  key={index}
                  className="relative min-w-full h-[550px] flex-shrink-0 overflow-hidden"
                >
                  {/* Image */}
                  <div
                    className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    <AppImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-10 text-white z-10 transition-all duration-1000 ${
                      isActive
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-accent text-sm font-medium mb-4">
                      {item.step}
                    </span>

                    <h3 className="text-4xl font-display font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev */}
          <button
            onClick={prevStep}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20 flex items-center justify-center"
          >
            <Icon name="ChevronLeftIcon" size={28} className="text-white" />
          </button>

          {/* Next */}
          <button
            onClick={nextStep}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20 flex items-center justify-center"
          >
            <Icon name="ChevronRightIcon" size={28} className="text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`rounded-full transition-all duration-500 ${
                currentStep === index
                  ? 'w-8 h-3 bg-accent'
                  : 'w-3 h-3 bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}