import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-secondary/40 z-0" />

      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-20 z-0 animate-pulse" />

      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-bounce-slow z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-fade-up">
        {/* Label */}
        <span className="section-label mx-auto inline-flex mb-6 transition-all duration-300 hover:scale-105">
          <Icon
            name="UsersIcon"
            size={14}
            className="text-accent animate-pulse"
          />
          About EGGPORCE
        </span>

        {/* Heading */}
        <h1 className="text-section-lg font-display font-medium text-foreground mb-4 pb-2 leading-[1.3] animate-fade-up delay-100">
          <span className="block">
            Tái sinh giá trị
          </span>

          <span className="block text-[0.9em] italic text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-gradient-x">
            từ những điều bị bỏ quên
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-xl italic text-accent font-medium leading-relaxed mb-8 transition-all duration-500 hover:tracking-wider hover:scale-105 animate-fade-up delay-200">
          “From Waste to Wonder”
        </p>

        {/* Content */}
        <div className="max-w-4xl mx-auto pt-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="animate-fade-up delay-300">
            <span className="font-semibold text-foreground">
              EggPorce
            </span>{' '}
            là dự án khởi nghiệp của{' '}
            <span className="font-semibold text-foreground">
              5 sinh viên Trường Đại học FPT Cần Thơ
            </span>{' '}
            đến từ hai chuyên ngành
            <span className="font-semibold text-foreground">
              {' '}
              Digital Marketing
            </span>{' '}
            và
            <span className="font-semibold text-foreground">
              {' '}
              Software Engineering
            </span>
            . Xuất phát từ thực tế hàng trăm tấn vỏ trứng bị thải bỏ mỗi ngày
            nhưng gần như không được tái sử dụng, nhóm đã lựa chọn biến một thứ
            từng bị xem là “rác thải” thành những sản phẩm mang giá trị
            <span className="text-foreground font-medium">
              {' '}
              thẩm mỹ, ứng dụng và bền vững
            </span>
            .
          </p>

          <p className="animate-fade-up delay-500">
            Không đơn thuần là làm đồ handmade, EggPorce theo đuổi tư duy
            <span className="font-semibold text-foreground">
              {' '}
              tái tạo giá trị
            </span>{' '}
            — nơi những vật liệu tưởng chừng vô dụng được nghiên cứu, xử lý và
            tái sinh thành các sản phẩm mang dấu ấn riêng. Chúng mình tin rằng
            sự sáng tạo không nằm ở việc tạo ra điều mới hoàn toàn, mà nằm ở
            cách nhìn lại những điều đã bị bỏ quên.
          </p>
        </div>
      </div>
    </section>
  );
}