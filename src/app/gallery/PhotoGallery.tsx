'use client'
import React, { useState } from "react";

import { photos } from "@/components/utils/image";

const PhotoGallery: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    interface Photo {
      id: number;
      src: string;
      alt: string;
    }
    const handleCardClick = (photo: Photo) => {
      setSelectedPhoto(photo);
    };
  
    const handleCloseModal = () => {
      setSelectedPhoto(null);
    };
  
    return (
      <div className="p-4">
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              onClick={() => handleCardClick(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-40 object-cover"
              />
              <p className="text-center p-2">kitchen</p>
            </div>
          ))}
        </div>
  
        {/* Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-full max-h-full p-4 bg-white rounded-lg shadow-lg overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 transition"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center p-2">kitchen</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default PhotoGallery;