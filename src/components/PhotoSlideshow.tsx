import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Função para carregar dinamicamente as fotos da pasta public/photos
function loadSlideshowImages() {
  const images = import.meta.glob('/public/photos/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: { url: true },
    import: 'default'
  });

  return Object.values(images).map((image: any) => ({
    url: typeof image === 'string' 
      ? image.replace('/public', '') 
      : image.default.replace('/public', ''),
    caption: '' // Caption padrão ou você pode adicionar títulos específicos
  }));
}

const PhotoSlideshow: React.FC = () => {
  const photos = loadSlideshowImages();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (photos.length === 0) {
    return (
      <div className="w-full h-96 md:h-[500px] flex items-center justify-center bg-gray-100 rounded-2xl">
        <p className="text-gray-500">Nenhuma foto encontrada na pasta /public/photos</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-aos="zoom-in"
    >
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-cover transform transition-transform duration-7000 hover:scale-105"
            onError={(e) => {
              // Fallback simples em caso de erro
              (e.target as HTMLImageElement).src = '/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-lg md:text-xl font-medium text-center drop-shadow-lg">
              {photo.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlideshow;