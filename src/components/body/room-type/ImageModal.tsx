'use client'
import { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';
import { image } from '@/components/utils/image';

interface image {
    url: string;
}
interface ImageModalProps {
    id: number;
    images: image[];
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!isOpen) return null;
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          padding: 2,
          width: '100%',
          maxWidth: 600,
          maxHeight: '80%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <IconButton
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
        <IconButton
          sx={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={goToPrev}
        >
          <ArrowBackIos />
        </IconButton>
        <img
          src={images[currentIndex].url}
          alt="modal"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '5px',
          }}
        />
        <IconButton
          sx={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={goToNext}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ImageModal;
