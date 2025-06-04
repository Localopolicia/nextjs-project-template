import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface InteractiveItemProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const InteractiveItem: React.FC<InteractiveItemProps> = ({ title, description, image, onClick }) => {
  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
      <figure className="relative w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
          }}
        />
      </figure>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          onClick={onClick} 
          className="w-full bg-black hover:bg-gray-800 text-white transition-colors duration-300"
        >
          ¡Click Aquí!
        </Button>
      </div>
    </Card>
  );
};

export default InteractiveItem;
