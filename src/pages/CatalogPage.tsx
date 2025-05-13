import React, { useState } from 'react';
import { games } from '../data/games';
import GameGrid from '../components/games/GameGrid';
import { Filter, SortAsc } from 'lucide-react';

const CatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract unique platforms and genres
  const platforms = Array.from(new Set(games.flatMap(game => game.platforms)));
  const genres = Array.from(new Set(games.flatMap(game => game.genres)));
  
  // Filter games based on search query, platforms, and genres
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPlatforms = selectedPlatforms.length === 0 || 
                             game.platforms.some(platform => selectedPlatforms.includes(platform));
    
    const matchesGenres = selectedGenres.length === 0 ||
                          game.genres.some(genre => selectedGenres.includes(genre));
    
    return matchesSearch && matchesPlatforms && matchesGenres;
  });
  
  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };
  
  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Browse Games
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile filter button */}
        <div className="lg:hidden">
          <button
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Filters sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-64 flex-shrink-0`}>
          <div className="sticky top-20">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Search</h3>
              <input
                type="text"
                placeholder="Search games..."
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-800 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Platforms</h3>
              <div className="space-y-2">
                {platforms.map((platform) => (
                  <div key={platform} className="flex items-center">
                    <input
                      id={`platform-${platform}`}
                      type="checkbox"
                      className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                      checked={selectedPlatforms.includes(platform)}
                      onChange={() => togglePlatform(platform)}
                    />
                    <label
                      htmlFor={`platform-${platform}`}
                      className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {platform}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Genres</h3>
              <div className="space-y-2">
                {genres.map((genre) => (
                  <div key={genre} className="flex items-center">
                    <input
                      id={`genre-${genre}`}
                      type="checkbox"
                      className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                      checked={selectedGenres.includes(genre)}
                      onChange={() => toggleGenre(genre)}
                    />
                    <label
                      htmlFor={`genre-${genre}`}
                      className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {genre}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Game grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredGames.length} results
            </p>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="sort"
                  className="appearance-none rounded-md border border-gray-300 dark:border-gray-700 pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-800 dark:text-white"
                  defaultValue="popular"
                >
                  <option value="popular">Popularity</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
                  <SortAsc className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          
          {filteredGames.length > 0 ? (
            <GameGrid games={filteredGames} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No games found matching your filters.
              </p>
              <button
                className="mt-4 text-violet-600 dark:text-violet-400"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedPlatforms([]);
                  setSelectedGenres([]);
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;