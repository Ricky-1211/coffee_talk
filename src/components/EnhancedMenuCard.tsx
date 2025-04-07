
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, HeartOff } from 'lucide-react';
import { useWatchlist, CoffeeItem } from '../context/WatchlistContext';
import { toast } from 'sonner';

interface EnhancedMenuCardProps extends CoffeeItem {}

const EnhancedMenuCard: React.FC<EnhancedMenuCardProps> = (props) => {
  const { id, name, description, price, image, popular, category } = props;
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  
  const handleToggleWatchlist = () => {
    if (isInWatchlist(id)) {
      removeFromWatchlist(id);
      toast.info(`${name} removed from your watchlist`);
    } else {
      addToWatchlist(props);
      toast.success(`${name} added to your watchlist`);
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        {popular && (
          <div className="absolute top-2 right-2 bg-coffee-medium text-white text-xs px-2 py-1 rounded-full z-20">
            Popular
          </div>
        )}
        <button 
          onClick={handleToggleWatchlist}
          className="absolute top-2 left-2 bg-white/90 p-1.5 rounded-full z-20 transition-all hover:bg-white"
        >
          {isInWatchlist(id) ? (
            <HeartOff className="h-5 w-5 text-coffee-dark" />
          ) : (
            <Heart className="h-5 w-5 text-coffee-medium" />
          )}
        </button>
        <div className="absolute bottom-2 left-2 bg-coffee-medium/90 text-white text-xs px-2 py-1 rounded-lg z-20">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-semibold text-xl">{name}</h3>
          <span className="text-coffee-medium font-semibold">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default EnhancedMenuCard;