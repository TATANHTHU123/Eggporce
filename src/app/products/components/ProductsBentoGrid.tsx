'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Category = 'Tất cả' | 'Móc khóa' | 'Khay & Hủ' | 'Chậu & Bình';

const allProducts = [
  {
    id: 1,
    name: 'Móc khóa bướm',
    material: 'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: "/assets/images/anh6.png",
    alt: 'Móc khóa hình bướm làm từ vỏ trứng tái chế, họa tiết khảm thủ công độc đáo, phụ kiện trang trí cá nhân',
    tag: 'Bán chạy',
    category: 'Móc khóa',
    description: 'Phụ kiện nhỏ mang ý nghĩa may mắn.'
  },
  {
    id: 2,
    name: 'Móc khóa nơ',
    material: 'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: "/assets/images/anh2.png",
    alt: 'Móc khóa hình nơ làm từ vỏ trứng tái chế, thiết kế khảm thủ công tinh tế, phụ kiện dễ thương',
    tag: 'Bán chạy',
    category: 'Móc khóa',
    description: 'Điểm nhấn dễ thương cho phụ kiện.'
  },
  {
    id: 3,
    name: 'Móc khóa mầm non',
    material: 'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: "/assets/images/anh8.png",
    alt: 'Móc khóa hình mầm non làm từ vỏ trứng tái chế, biểu tượng phát triển và khởi đầu mới',
    tag: 'Bán chạy',
    category: 'Móc khóa',
    description: 'Biểu tượng khởi đầu và phát triển.'
  },
  {
    id: 4,
    name: 'Móc khóa chân mèo',
    material: 'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: "/assets/images/anh7.png",
    alt: 'Móc khóa hình chân mèo làm từ vỏ trứng tái chế, thiết kế đáng yêu, phụ kiện trang trí cá nhân',
    tag: 'Bán chạy',
    category: 'Móc khóa',
    description: 'Thiết kế đáng yêu, cá tính.'
  },
  {
    id: 5,
    name: 'Móc khóa cỏ 4 lá',
    material: 'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: "/assets/images/anh3.png",
    alt: 'Móc khóa cỏ 4 lá làm từ vỏ trứng tái chế, biểu tượng may mắn với họa tiết khảm thủ công',
    tag: 'Bán chạy',
    category: 'Móc khóa',
    description: 'Mang ý nghĩa may mắn.'
  },
  {
    id: 6,
    name: 'Móc khóa lá phong',
    material: 'Được thiết kế với nhiều họa tiết khảm khác nhau, vừa là phụ kiện trang trí cá nhân vừa mang ý nghĩa như may mắn, sự phát triển và phong cách riêng',
    price: '25,000đ',
    image: "/assets/images/anh11.png",
    alt: 'Móc khóa hình lá phong làm từ vỏ trứng tái chế, thiết kế thủ công mang phong cách cá tính',
    tag: 'Bán chạy',
    category: 'Móc khóa',
    description: 'Phong cách riêng, nổi bật.'
  },
  {
    id: 7,
    name: 'Hủ trứng',
    material: 'Được thiết kế theo phong cách tối giản, phù hợp để lưu trữ phụ kiện nhỏ hoặc trang trí không gian sống.',
    price: '59,000đ',
    image: "/assets/images/anh9.png",
    alt: 'Hũ đựng đồ mini làm từ vỏ trứng tái chế, thiết kế tối giản, dùng để trang trí hoặc lưu trữ phụ kiện nhỏ',
    tag: 'Độc đáo',
    category: 'Khay & Hủ',
    description: 'Lưu trữ nhỏ gọn, decor đẹp.'
  },
  {
    id: 8,
    name: 'Khay/dĩa họa tiết hoa hồng',
    material: 'Trang trí đa năng, thích hợp để đựng trang sức hoặc các vật dụng nhỏ trong cuộc sống.',
    price: '49,000đ',
    image: "/assets/images/anh5.png",
    alt: 'Khay trang trí họa tiết hoa hồng làm từ vỏ trứng tái chế, dùng để đựng trang sức và vật dụng nhỏ',
    tag: 'Đa năng',
    category: 'Khay & Hủ',
    description: 'Đa năng cho đồ nhỏ xinh.'
  },
  {
    id: 9,
    name: 'Bình hoa tĩnh phương',
    material: 'Mang phong cách tối giản, phù hợp để cắm hoa khô/tươi và trang trí không gian theo hướng tinh tế, hiện đại.',
    price: '129,000đ',
    image: "/assets/images/anh4.png",
    alt: 'Bình hoa thủ công làm từ vỏ trứng tái chế, phong cách tối giản, phù hợp trang trí không gian hiện đại',
    tag: 'Yêu thích',
    category: 'Chậu & Bình',
    description: 'Tinh tế cho không gian sống.'
  },
  {
    id: 10,
    name: 'Chậu cây mini dáng bầu',
    material: 'Dùng để trồng sen đá và cây nhỏ, góp phần tạo điểm nhấn xanh cho bàn học, bàn làm việc hoặc không gian nội thất.',
    price: '49,000đ',
    image: "/assets/images/anh10.png",
    alt: 'Chậu cây mini làm từ vỏ trứng tái chế, thiết kế dáng bầu, phù hợp trồng sen đá và cây nhỏ',
    tag: 'Tối giản',
    category: 'Chậu & Bình',
    description: 'Điểm nhấn xanh nhỏ xinh.'
  }

  //{
  //  id: 5, name: 'Khay gốm vỏ trứng', material: 'Vỏ trứng nghiền mịn', price: '145,000đ',
  //  image: "/assets/images/Khay.png",
  //  alt: 'Small ceramic bowl with eggshell inlay, minimalist white background, artisan craft',
  //  tag: 'Mới', category: 'Chén & Đĩa',
  // description: 'Chén ăn cơm thủ công, an toàn thực phẩm, đường kính 12cm.'
  //},
  //{
  //  id: 11, name: 'Bát gốm trứng sâu lòng', material: 'Vỏ trứng + đất sét đỏ', price: '210,000đ',
  //  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17170484e-1770172449722.png",
  //  alt: 'Deep ceramic bowl with eggshell pattern, rustic red clay, handmade Vietnamese pottery',
  //  tag: null, category: 'Chén & Đĩa',
  //  description: 'Bát súp hoặc mì, dung tích 600ml, chịu nhiệt tốt.'
  //},
  //{
  //  id: 12, name: 'Bình cắm hoa mini', material: 'Vỏ trứng + men trắng', price: '125,000đ',
  //  image: "https://img.rocket.new/generatedImages/rocket_gen_img_172663bf0-1768237643010.png",
  //  alt: 'Mini ceramic flower vase with white glaze and eggshell texture, minimalist design',
  //  tag: 'Mới', category: 'Bình & Lọ',
  //  description: 'Bình mini cao 10cm, bộ 3 chiếc, trang trí bàn làm việc.'
  //}
];


const categories: Category[] = ['Tất cả', 'Móc khóa', 'Khay & Hủ', 'Chậu & Bình'];

export default function ProductsBentoGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tất cả');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'Tất cả' ?
    allProducts :
    allProducts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-up', 'transition-all', 'duration-700');
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
  }, [filtered]);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 reveal-item">
          {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat ?
                'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' :
                'bg-secondary text-secondary-foreground border-border hover:border-primary hover:text-primary'}`
              }>

              {cat}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) =>
            <div
              key={product.id}
              className="reveal-item product-card group flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}>

              <div className="relative aspect-square overflow-hidden">
                <AppImage
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {product.tag &&
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {product.tag}
                  </div>
                }

                {/* Hover info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/80 text-sm">{product.description}</p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {product.material}
                </p>
                <h3 className="font-display font-medium text-foreground text-lg flex-1">
                  {product.name}
                </h3>

                <div className="mt-4">
                  <p className="font-bold text-primary text-xl">{product.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}