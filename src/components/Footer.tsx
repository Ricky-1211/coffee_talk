import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-coffee-cream" />
              <span className="text-2xl font-serif font-semibold text-coffee-cream">Brew Haven</span>
            </div>
            <p className="text-coffee-cream/60 text-sm">
              Crafting perfect coffee experiences since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">Home</a></li>
              <li><a href="#menu" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">Menu</a></li>
              <li><a href="#about" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">About</a></li>
              <li><a href="#location" className="text-coffee-cream/60 hover:text-coffee-cream transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-coffee-cream/60">
              <li>Monday - Friday: 6am - 7pm</li>
              <li>Saturday: 7am - 8pm</li>
              <li>Sunday: 7am - 7pm</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Subscribe</h4>
            <p className="text-coffee-cream/60 text-sm mb-4">
              Join our newsletter for updates and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg bg-coffee-medium/20 text-coffee-cream border-coffee-medium/20 focus:outline-none focus:ring-1 focus:ring-coffee-cream w-full"
              />
              <button className="bg-coffee-medium hover:bg-coffee-light transition-colors px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-coffee-medium/20 mt-8 pt-8 text-center text-coffee-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Brew Haven Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
