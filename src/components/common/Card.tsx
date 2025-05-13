import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = false
}) => {
  const hoverStyles = hoverEffect 
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl' 
    : '';

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;