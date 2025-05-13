import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-violet-900 dark:from-black dark:to-violet-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzBoMzB2MzBIMHYtMzBoMzB2MzBoLTMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover Your Next Gaming Adventure
            </h1>
            <p className="mt-6 text-xl text-violet-100 max-w-3xl">
              Explore thousands of digital games with instant access. From AAA blockbusters to indie gems, GameVault has something for every type of player.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Link to="/catalog" className="flex items-center">
                  Browse Games
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/deals">
                  View Deals
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4">
              <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-violet-700 via-purple-500 to-blue-600 rounded-full"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured Game"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center">
                  <div className="bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    Featured
                  </div>
                  <div className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    New Release
                  </div>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">God of War Ragnarök</h3>
                <p className="mt-1 text-sm text-gray-300">Embark on an epic journey through the nine realms of Norse mythology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;