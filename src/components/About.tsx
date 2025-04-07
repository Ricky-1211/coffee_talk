
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee shop interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 rounded-lg overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee being prepared" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <div className="w-20 h-1 bg-coffee-medium"></div>
            <p className="text-muted-foreground">
              Founded in 2010, Brew Haven began as a small passion project by two friends who believed in creating a space where coffee wasn't just served, but celebrated.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to honor that tradition by sourcing ethically-grown beans, roasting in small batches, and training our baristas in the art of coffee preparation.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-xl font-serif font-semibold mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To serve exceptional coffee while creating a welcoming space for our community.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif font-semibold mb-2">Our Values</h4>
                <p className="text-sm text-muted-foreground">
                  Quality, sustainability, community, and the perfect cup of coffee every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
