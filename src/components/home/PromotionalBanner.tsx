import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const PromotionalBanner: React.FC = () => {
  return (
    <section className="py-16 bg-violet-900 dark:bg-violet-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M0 0L100 0L100 100Z" fill="white"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Summer Game Sale
          </h2>
          <p className="text-xl text-violet-200 mb-8">
            Up to 70% off on hundreds of games! Limited time offer, don't miss out on these incredible deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" className="bg-white text-violet-900 hover:bg-gray-100">
              <Link to="/deals">
                Shop Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/catalog">
                View All Games
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-violet-300">
            Sale ends in 5 days. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;