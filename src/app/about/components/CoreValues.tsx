import React from 'react';

const values = [
  {
    title: 'Tái sinh giá trị',
    desc: 'Chúng mình tin rằng những vật liệu tưởng chừng bị bỏ đi vẫn có thể được tái sinh thành sản phẩm mang giá trị thẩm mỹ, ứng dụng và ý nghĩa.',
  },
  {
    title: 'Sáng tạo từ góc nhìn khác',
    desc: 'Sự sáng tạo không chỉ là tạo ra điều mới, mà còn là nhìn lại những điều đã bị lãng quên và biến chúng thành dấu ấn riêng.',
  },
  {
    title: 'Bền vững & trách nhiệm',
    desc: 'EggPorce hướng đến lối sống xanh, giảm thiểu lãng phí và tạo ra những sản phẩm có giá trị lâu dài cho cộng đồng và môi trường.',
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-5 inline-flex">
            Giá trị cốt lõi
          </span>

          <h2 className="text-5xl font-display font-medium text-foreground">
            Điều chúng mình tin tưởng
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Không chỉ tạo ra sản phẩm, EggPorce còn theo đuổi một cách nghĩ mới
            về sáng tạo, giá trị và sự bền vững.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-5 text-foreground">
                {value.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}