import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedGames from '../components/home/FeaturedGames';
import CategoriesSection from '../components/home/CategoriesSection';
import PromotionalBanner from '../components/home/PromotionalBanner';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedGames />
      <PromotionalBanner />
      <CategoriesSection />
    </div>
  );
};

export default HomePage;