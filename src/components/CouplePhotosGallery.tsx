import React, { useState } from 'react';
import { X, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_PHOTOS = 12;

const generatePhotoPaths = (total: number): string[] =>
  Array.from({ length: total }, (_, i) => `/photos/foto${i + 1}.jpg`);

const fallbackPhotos = Array.from({ length: TOTAL_PHOTOS }, (_, i) =>
  `https://images.pexels.com/photos/10249${80 + i}/pexels-photo-10249${80 + i}.jpeg?auto=compress&cs=tinysrgb&w=400`
);

const CouplePhotosGallery: React.FC = () => {
  const couplePhotos = generatePhotoPaths(TOTAL_PHOTOS);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedPhoto(index);
  const closeModal = () => setSelectedPhoto(null);
  const goToPrevious = () => {
    if (selectedPhoto !== null)
      setSelectedPhoto((selectedPhoto - 1 + couplePhotos.length) % couplePhotos.length);
  };
  const goToNext = () => {
    if (selectedPhoto !== null)
      setSelectedPhoto((selectedPhoto + 1) % couplePhotos.length);
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
                (e.target as HTMLImageElement).src =
                  fallbackPhotos[selectedPhoto % fallbackPhotos.length].replace('w=400', 'w=800');
              }}
            />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>

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
