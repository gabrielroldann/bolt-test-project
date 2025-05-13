import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification.',
    price: 59.99,
    discountPercentage: 25,
    releaseDate: '2020-12-10',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    genres: ['RPG', 'Action', 'Open World'],
    tags: ['Cyberpunk', 'Sci-fi', 'Story Rich'],
    platforms: ['Windows', 'PlayStation', 'Xbox'],
    rating: 4.2,
    images: {
      cover: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      screenshots: [
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7915527/pexels-photo-7915527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7915440/pexels-photo-7915440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    featured: true
  },
  {
    id: '2',
    title: 'Elden Ring',
    description: 'ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware\'s largest game to date.',
    price: 69.99,
    releaseDate: '2022-02-25',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    genres: ['RPG', 'Action', 'Open World'],
    tags: ['Dark Fantasy', 'Souls-like', 'Difficult'],
    platforms: ['Windows', 'PlayStation', 'Xbox'],
    rating: 4.8,
    images: {
      cover: 'https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      screenshots: [
        'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    featured: true
  },
  {
    id: '3',
    title: 'God of War Ragnarök',
    description: 'God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.',
    price: 49.99,
    discountPercentage: 10,
    releaseDate: '2022-11-09',
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Action', 'Adventure'],
    tags: ['Norse Mythology', 'Story Rich', 'Action-Adventure'],
    platforms: ['PlayStation'],
    rating: 4.9,
    images: {
      cover: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      screenshots: [
        'https://images.pexels.com/photos/4842496/pexels-photo-4842496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7915464/pexels-photo-7915464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  },
  {
    id: '4',
    title: 'Horizon Forbidden West',
    description: 'Horizon Forbidden West continues Aloy\'s story as she moves west to face a majestic but dangerous frontier where she\'ll encounter amazing machines and mysterious new threats.',
    price: 59.99,
    discountPercentage: 15,
    releaseDate: '2022-02-18',
    developer: 'Guerrilla Games',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Action', 'RPG', 'Open World'],
    tags: ['Post-Apocalyptic', 'Sci-fi', 'Adventure'],
    platforms: ['PlayStation'],
    rating: 4.7,
    images: {
      cover: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      screenshots: [
        'https://images.pexels.com/photos/5082569/pexels-photo-5082569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    featured: true
  },
  {
    id: '5',
    title: 'Final Fantasy XVI',
    description: 'The latest game in the legendary FINAL FANTASY series, FINAL FANTASY XVI, brings players into a world where Eikons are powerful and deadly creatures that reside within Dominants—a single man or woman who is blessed with the ability to call upon their dreaded power.',
    price: 69.99,
    releaseDate: '2023-06-22',
    developer: 'Square Enix',
    publisher: 'Square Enix',
    genres: ['RPG', 'Action'],
    tags: ['Fantasy', 'Story Rich', 'JRPG'],
    platforms: ['PlayStation'],
    rating: 4.6,
    images: {
      cover: 'https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      screenshots: [
        'https://images.pexels.com/photos/5082561/pexels-photo-5082561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  },
  {
    id: '6',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda: Tears of the Kingdom for Nintendo Switch.',
    price: 59.99,
    releaseDate: '2023-05-12',
    developer: 'Nintendo',
    publisher: 'Nintendo',
    genres: ['Action', 'Adventure', 'Open World'],
    tags: ['Fantasy', 'Exploration', 'Puzzle'],
    platforms: ['Nintendo Switch'],
    rating: 4.9,
    images: {
      cover: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      screenshots: [
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7915527/pexels-photo-7915527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7915440/pexels-photo-7915440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    featured: true
  }
];