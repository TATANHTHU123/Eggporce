import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  );
}