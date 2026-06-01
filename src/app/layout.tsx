import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import '../styles/tailwind.css';
import ChatBot from '@/components/ChatBot';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'EGGPORCE — Gốm Từ Trứng Thủ Công Việt Nam',
  description:
    'EGGPORCE biến vỏ trứng tái chế thành những tác phẩm gốm thủ công độc đáo. Khám phá bộ sưu tập gốm vỏ trứng tinh xảo, thân thiện môi trường.',
  openGraph: {
    title: 'EGGPORCE — Gốm Từ Trứng',
    description: 'Gốm thủ công làm từ vỏ trứng tái chế. Độc đáo và bền vững.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={inter.className}>
        {children}

        {/* Chatbot */}
        <ChatBot />
      </body>
    </html>
  );
}