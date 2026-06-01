import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './components/ProductsHero';
import ProductsBentoGrid from './components/ProductsBentoGrid';
import ProductsGallery from './components/ProductsGallery';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ProductsHero />
      <ProductsBentoGrid />
      <ProductsGallery />
      <Footer />
    </main>
  );
}