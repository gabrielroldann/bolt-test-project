import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { game, quantity } = item;
  
  const price = game.discountPercentage
    ? game.price * (1 - game.discountPercentage / 100)
    : game.price;
    
  const totalPrice = price * quantity;
  
  return (
    <div className="flex py-6 border-b border-gray-200 dark:border-gray-700">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Link to={`/game/${game.id}`}>
          <img
            src={game.images.cover}
            alt={game.title}
            className="h-full w-full object-cover object-center"
          />
        </Link>
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
            <Link to={`/game/${game.id}`} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              <h3>{game.title}</h3>
            </Link>
            <p className="ml-4">${totalPrice.toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {game.platforms.join(', ')}
          </p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              onClick={() => updateQuantity(game.id, quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="mx-2 text-gray-700 dark:text-gray-300">
              {quantity}
            </span>
            <button
              type="button"
              className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              onClick={() => updateQuantity(game.id, quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex">
            <button
              type="button"
              className="font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 flex items-center"
              onClick={() => removeFromCart(game.id)}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;