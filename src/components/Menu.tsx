
import React from 'react';
import MenuCard from './MenuCard';
import { Button } from './ui/button.tsx';

const Menu = () => {
  const coffeeItems = [
    {
      name: "Signature Espresso",
      description: "Our house blend with rich, balanced flavor and caramel notes",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso with steamed milk, vanilla and caramel drizzle",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1534687941688-13aadaaeaaf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pour Over",
      description: "Hand-poured coffee highlighting origin characteristics",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      name: "Cold Brew",
      description: "Slow-steeped for 24 hours, smooth with low acidity",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mocha Latte",
      description: "Rich espresso with chocolate and steamed milk",
      price: "$4.95",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chai Tea Latte",
      description: "Spiced tea concentrate with steamed milk",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1571658734851-7d7f16c40172?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

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
          {coffeeItems.map((item, index) => (
            <MenuCard 
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              popular={item.popular}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-coffee-medium hover:bg-coffee-dark text-white px-8 py-6 text-lg button-hover-effect">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
