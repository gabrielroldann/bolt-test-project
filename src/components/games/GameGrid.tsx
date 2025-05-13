import React from 'react';
import { Game } from '../../types';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  title?: string;
}

const GameGrid: React.FC<GameGridProps> = ({ games, title }) => {
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;