
import React, { useState } from 'react';
import { Button } from './ui/button.tsx';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 fixed w-full bg-background/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-coffee-dark" />
          <span className="text-2xl font-serif font-semibold text-coffee-dark">Brew Haven</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-foreground hover:text-coffee-medium transition-colors">Home</a>
          <a href="#menu" className="text-foreground hover:text-coffee-medium transition-colors">Menu</a>
          <a href="#about" className="text-foreground hover:text-coffee-medium transition-colors">About</a>
          <a href="#location" className="text-foreground hover:text-coffee-medium transition-colors">Location</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-coffee-medium hover:bg-coffee-dark text-white button-hover-effect">
            Order Online
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#home" className="text-foreground hover:text-coffee-medium transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#menu" className="text-foreground hover:text-coffee-medium transition-colors" onClick={toggleMenu}>Menu</a>
            <a href="#about" className="text-foreground hover:text-coffee-medium transition-colors" onClick={toggleMenu}>About</a>
            <a href="#location" className="text-foreground hover:text-coffee-medium transition-colors" onClick={toggleMenu}>Location</a>
            <Button className="bg-coffee-medium hover:bg-coffee-dark text-white w-full button-hover-effect">
              Order Online
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
