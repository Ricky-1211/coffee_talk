
import React from 'react';
import MenuCard from './MenuCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { coffeeItems } from '../data/coffeeData';

const Menu = () => {
  // Display only the first 6 items on the homepage
  const featuredItems = coffeeItems.slice(0, 6);

  return (
    <section id="menu" className="py-16 bg-coffee-cream/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coffee Menu</h2>
          <p className="text-muted-foreground">
            We source the finest beans from around the world and roast them in-house for the freshest coffee experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredItems.map((item) => (
            <MenuCard 
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              popular={item.popular}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-coffee-medium hover:bg-coffee-dark text-white px-8 py-6 text-lg button-hover-effect" asChild>
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
