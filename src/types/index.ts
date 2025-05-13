export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  tags: string[];
  platforms: Platform[];
  rating: number;
  images: {
    cover: string;
    screenshots: string[];
  };
  featured?: boolean;
}

export type Platform = 'Windows' | 'MacOS' | 'Linux' | 'PlayStation' | 'Xbox' | 'Nintendo Switch';

export interface CartItem {
  game: Game;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}