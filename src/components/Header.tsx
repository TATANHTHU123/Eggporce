'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'About us', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 lấy route hiện tại

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'py-3 bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/5'
            : 'py-5 bg-white/5 backdrop-blur-xl'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <AppLogo size={36} />
            <span className="font-display font-semibold text-xl text-[#C7924A]">
              EGGPORCE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300
                  ${isActive
                      ? 'text-[#D9A86A]'
                      : 'text-[#C7924A] hover:text-[#D9A86A]'
                    }`}
                >
                  {link.label}

                  {/* underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#D9A86A] transition-all duration-300
                    ${isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Khám phá ngay
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10"
            >
              <span className={`w-5 h-0.5 bg-white transition ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-2xl flex flex-col transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex-1 flex flex-col gap-6">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-4xl font-display transition
                  ${isActive
                      ? 'text-[#D9A86A]'
                      : 'text-[#C7924A]'
                    }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="btn-primary justify-center text-base py-4"
          >
            Khám phá sản phẩm
          </Link>
        </div>
      </div>
    </>
  );
}