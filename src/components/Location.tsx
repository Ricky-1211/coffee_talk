
import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-16 bg-coffee-dark text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-coffee-cream/80">
            Come experience the cozy atmosphere and delicious coffee at our location.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-coffee-medium/20 p-8 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-coffee-cream mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Address</h3>
                  <p className="text-coffee-cream/80">123 Coffee Street</p>
                  <p className="text-coffee-cream/80">Brewville, CA 94321</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-coffee-cream mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Hours</h3>
                  <p className="text-coffee-cream/80">Monday - Friday: 6am - 7pm</p>
                  <p className="text-coffee-cream/80">Weekends: 7am - 8pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-coffee-cream mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Contact</h3>
                  <p className="text-coffee-cream/80">(555) 123-4567</p>
                  <p className="text-coffee-cream/80">hello@brewhaven.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM2zCsD!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
