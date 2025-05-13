import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Info } from 'lucide-react';
import { games } from '../data/games';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import GameGrid from '../components/games/GameGrid';

const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const game = games.find(game => game.id === id);
  
  if (!game) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Game not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The game you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/catalog"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Browse all games
        </Link>
      </div>
    );
  }
  
  const discountedPrice = game.discountPercentage 
    ? game.price * (1 - game.discountPercentage / 100) 
    : null;
  
  const images = [game.images.cover, ...game.images.screenshots];
  
  // Get similar games (same genre)
  const similarGames = games
    .filter(g => g.id !== game.id && g.genres.some(genre => game.genres.includes(genre)))
    .slice(0, 4);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <Link to="/catalog" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  Games
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {game.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={images[activeImageIndex]}
              alt={game.title}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
          
          <div className="mt-4 grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`rounded-lg overflow-hidden border-2 ${index === activeImageIndex ? 'border-violet-500' : 'border-transparent'}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${game.title} screenshot ${index}`}
                  className="w-full h-auto object-cover aspect-video"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {game.genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {game.title}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(game.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} ${i === Math.floor(game.rating) && game.rating % 1 > 0 ? 'fill-yellow-400' : ''}`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              {game.rating.toFixed(1)} out of 5
            </span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {game.description}
          </p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Game Details
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Developer</p>
                <p className="text-gray-900 dark:text-white">{game.developer}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Publisher</p>
                <p className="text-gray-900 dark:text-white">{game.publisher}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Release Date</p>
                <p className="text-gray-900 dark:text-white">{new Date(game.releaseDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Platforms</p>
                <p className="text-gray-900 dark:text-white">{game.platforms.join(', ')}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-end">
              {discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-xl text-gray-500 dark:text-gray-400 line-through">
                    ${game.price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm font-semibold text-red-600 dark:text-red-500">
                    Save {game.discountPercentage}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${game.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              className="flex-1 flex items-center justify-center"
              onClick={() => addToCart(game)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center"
            >
              <Heart className="h-5 w-5 mr-2" />
              Wishlist
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="flex items-center justify-center"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
      
      {similarGames.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            You might also like
          </h2>
          <GameGrid games={similarGames} />
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;