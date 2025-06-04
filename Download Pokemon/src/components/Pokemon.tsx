import React from 'react';

interface PokemonProps {
  id: number;
  position: { x: number; y: number };
  onCatch: () => void;
}

const Pokemon: React.FC<PokemonProps> = ({ id, position, onCatch }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <img
      src={imageUrl}
      alt={`Pokemon ${id}`}
      className="absolute w-12 h-12 cursor-pointer transition-transform hover:scale-110"
      style={{ top: `${position.y}%`, left: `${position.x}%` }}
      onClick={onCatch}
      draggable={false}
    />
  );
};

export default Pokemon;
