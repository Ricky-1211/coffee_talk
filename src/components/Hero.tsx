import React from 'react';
import { Button } from './ui/button.tsx';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Experience the Perfect <span className="text-coffee-medium">Brew</span> Every Morning
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Artisanal coffee, carefully sourced and roasted to perfection. Visit us for a memorable coffee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-coffee-medium hover:bg-coffee-dark text-white px-6 py-6 text-lg button-hover-effect">
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-coffee-medium text-coffee-dark hover:bg-coffee-cream px-6 py-6 text-lg button-hover-effect">
                Find Location
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/30 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Coffee being poured into a cup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
