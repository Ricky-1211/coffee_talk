
import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import Hero from '@/components/Hero.tsx';
import Menu from '@/components/Menu.tsx';
import About from '@/components/About.tsx';
import Location from '@/components/Location.tsx';
import Footer from '@/components/Footer.tsx';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
