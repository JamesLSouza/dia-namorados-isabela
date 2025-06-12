import React, { useState } from 'react';
import { X, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const CouplePhotosGallery: React.FC = () => {
  // Lista de fotos do casal (adicione aqui os nomes dos arquivos da pasta)
  const couplePhotos = [
    '/photos/foto1.jpg',
    '/photos/foto2.jpg',
    '/photos/foto3.jpg',
    '/photos/foto4.jpg',
    '/photos/foto5.jpg',
    '/photos/foto6.jpg',
    '/photos/foto7.jpg',
    '/photos/foto8.jpg',
    '/photos/foto9.jpg',
    '/photos/foto10.jpg',
    '/photos/foto11.jpg',
    '/photos/foto12.jpg',
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? couplePhotos.length - 1 : selectedPhoto - 1);
    }
  };

  const goToNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === couplePhotos.length - 1 ? 0 : selectedPhoto + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {couplePhotos.map((photo, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            onClick={() => openModal(index)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="aspect-square relative">
              <img
                src={photo}
                alt={`Foto do casal ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback para fotos que não existem - usar fotos do Pexels
                  const fallbackPhotos = [
                    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024991/pexels-photo-1024991.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024988/pexels-photo-1024988.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024987/pexels-photo-1024987.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024986/pexels-photo-1024986.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024985/pexels-photo-1024985.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&w=400',
                  ];
                  (e.target as HTMLImageElement).src = fallbackPhotos[index % fallbackPhotos.length];
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart size={32} className="text-white animate-pulse" fill="currentColor" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para visualizar foto em tamanho grande */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={couplePhotos[selectedPhoto]}
              alt={`Foto do casal ${selectedPhoto + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                const fallbackPhotos = [
                  'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024991/pexels-photo-1024991.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024988/pexels-photo-1024988.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024987/pexels-photo-1024987.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024986/pexels-photo-1024986.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024985/pexels-photo-1024985.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&w=800',
                ];
                (e.target as HTMLImageElement).src = fallbackPhotos[selectedPhoto % fallbackPhotos.length];
              }}
            />
            
            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Navegação */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Contador de fotos */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              {selectedPhoto + 1} de {couplePhotos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouplePhotosGallery;