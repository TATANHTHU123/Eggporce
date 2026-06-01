import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-display font-semibold text-lg text-foreground">
              EGGPORCE
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Trang chủ
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Sản phẩm
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About us
            </Link>
          </nav>

          {/* Copyright + Email */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap justify-center">
            <span>© 2025 EGGPORCE</span>
            <span className="w-px h-4 bg-border" />
            <a
              href="mailto:eggporce2025@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              eggporce2025@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}