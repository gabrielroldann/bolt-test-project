import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Game } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { addToCart } = useCart();
  
  const discountedPrice = game.discountPercentage 
    ? game.price * (1 - game.discountPercentage / 100) 
    : null;
  
  return (
    <Card hoverEffect>
      <div className="relative">
        <Link to={`/game/${game.id}`}>
          <img 
            src={game.images.cover} 
            alt={game.title} 
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
        </Link>
        {game.discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{game.discountPercentage}%
          </div>
        )}
        <button 
          className="absolute top-2 left-2 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900/70 text-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {game.platforms.slice(0, 3).map((platform) => (
            <span 
              key={platform} 
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
            >
              {platform}
            </span>
          ))}
        </div>
        
        <Link to={`/game/${game.id}`}>
          <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            {game.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {game.developer}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {discountedPrice ? (
              <>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${game.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${game.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            onClick={() => addToCart(game)}
            aria-label={`Add ${game.title} to cart`}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;