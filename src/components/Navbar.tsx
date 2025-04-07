
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X, Coffee, Heart, LogIn, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useWatchlist } from '@/context/WatchlistContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { watchlist } = useWatchlist();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to handle section navigation
  const getSectionLink = (sectionId: string) => {
    // If already on homepage, use hash link
    if (location.pathname === '/') {
      return `#${sectionId}`;
    }
    // If on another page, navigate to homepage with section hash
    return `/#${sectionId}`;
  };

  return (
    <nav className="py-4 fixed w-full bg-background/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-coffee-dark" />
            <span className="text-2xl font-serif font-semibold text-coffee-dark">Brew Haven</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-foreground hover:text-coffee-medium transition-colors">Home</Link>
          <Link to="/menu" className="text-foreground hover:text-coffee-medium transition-colors">Menu</Link>
          <a href={getSectionLink('about')} className="text-foreground hover:text-coffee-medium transition-colors">About</a>
          <a href={getSectionLink('location')} className="text-foreground hover:text-coffee-medium transition-colors">Location</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/menu?tab=watchlist" className="relative">
            <Heart className="h-6 w-6 text-coffee-medium" />
            {watchlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-coffee-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {watchlist.length}
              </span>
            )}
          </Link>
          
          {isAuthenticated ? (
            <Link to="/profile">
              <Button variant="ghost" className="flex items-center space-x-2">
                <UserCircle className="h-5 w-5 text-coffee-medium" />
                <span>Profile</span>
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="ghost" className="flex items-center space-x-2">
                <LogIn className="h-5 w-5 text-coffee-medium" />
                <span>Login</span>
              </Button>
            </Link>
          )}
          
          <Button className="bg-coffee-medium hover:bg-coffee-dark text-white button-hover-effect">
            Order Online
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-coffee-medium transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="text-foreground hover:text-coffee-medium transition-colors" onClick={toggleMenu}>Menu</Link>
            <a 
              href={getSectionLink('about')} 
              className="text-foreground hover:text-coffee-medium transition-colors" 
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href={getSectionLink('location')} 
              className="text-foreground hover:text-coffee-medium transition-colors" 
              onClick={toggleMenu}
            >
              Location
            </a>
            <Link 
              to="/menu?tab=watchlist" 
              className="flex items-center space-x-2 text-foreground hover:text-coffee-medium transition-colors"
              onClick={toggleMenu}
            >
              <Heart className="h-5 w-5" />
              <span>Watchlist ({watchlist.length})</span>
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 text-foreground hover:text-coffee-medium transition-colors"
                onClick={toggleMenu}
              >
                <UserCircle className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center space-x-2 text-foreground hover:text-coffee-medium transition-colors"
                onClick={toggleMenu}
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
            
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
