import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProductsPreview from './components/ProductsPreview';
import ImpactSection from './components/ImpactSection';
import BlogPreview from './components/BlogPreview';
import ProcessSection from '@/app/components/ProcessSection';
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ImpactSection />
      <ProcessSection />
      <ProductsPreview />
      <BlogPreview />
      <Footer />
    </main>
  );
}