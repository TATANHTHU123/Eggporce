'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'py-3 bg-background/90 backdrop-blur-xl border-b border-border shadow-sm shadow-primary/5'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={36} />
            <span className="font-display font-semibold text-xl text-[#C7924A] tracking-tight">
              EGGPORCE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-[#C7924A] hover:text-[#D9A86A] transition-colors duration-200 relative group"
              >
                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Khám phá ngay
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col transition-all duration-400 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex-1 flex flex-col gap-6">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-display font-medium text-[#C7924A] hover:text-[#D9A86A] transition-colors duration-200"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {link?.label}
              </Link>
            ))}
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