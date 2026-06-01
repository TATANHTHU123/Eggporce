import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import AboutHero from './components/AboutHero';
import FounderGrid from './components/FounderGrid';
import CoreValues from './components/CoreValues';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <AboutHero />
      
      <FounderGrid />
      
      <CoreValues />

      <Footer />
    </main>
  );
}