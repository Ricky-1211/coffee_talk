
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import EnhancedMenuCard from '@/components/EnhancedMenuCard';
import Footer from '@/components/Footer';
import { coffeeItems } from '@/data/coffeeData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useWatchlist } from '@/context/WatchlistContext';


const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { watchlist } = useWatchlist();
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(coffeeItems.map(item => item.category)))];
  
  const filteredItems = activeCategory === "all" 
    ? coffeeItems 
    : coffeeItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-coffee-cream/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Coffee Menu</h1>
            <p className="text-muted-foreground">
              Explore our extensive selection of handcrafted coffee and specialty drinks, made with the finest beans from around the world.
            </p>
          </div>
          
          <Tabs defaultValue="menu" className="w-full mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="menu">Full Menu</TabsTrigger>
              <TabsTrigger value="watchlist">My Watchlist ({watchlist.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => (
                  <Button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={`capitalize ${activeCategory === category ? 'bg-coffee-medium hover:bg-coffee-dark' : ''}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <EnhancedMenuCard key={item.id} {...item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="watchlist">
              {watchlist.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Your watchlist is empty</h3>
                  <p className="text-muted-foreground mb-4">Save your favorite drinks to try later!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {watchlist.map((item) => (
                    <EnhancedMenuCard key={item.id} {...item} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FullMenu;
