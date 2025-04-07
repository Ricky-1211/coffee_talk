
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  category: string;
}

interface WatchlistContextType {
  watchlist: CoffeeItem[];
  addToWatchlist: (item: CoffeeItem) => void;
  removeFromWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<CoffeeItem[]>(() => {
    const savedWatchlist = localStorage.getItem('coffeeWatchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('coffeeWatchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (item: CoffeeItem) => {
    if (!isInWatchlist(item.id)) {
      setWatchlist((prev) => [...prev, item]);
    }
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter(item => item.id !== id));
  };

  const isInWatchlist = (id: number) => {
    return watchlist.some(item => item.id === id);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
