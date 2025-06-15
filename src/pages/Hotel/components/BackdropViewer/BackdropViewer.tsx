import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';
import { useEffect } from 'react';
import { CloseButton, ContentWrapper, NavButton, StyledBackdrop } from './BackdropViewer.style';
import { BackdropViewerProps } from './Backdropviewer.types';

const BackdropViewer = ({ open, onClose, currentImage, onNavigate }: BackdropViewerProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onNavigate, onClose]);

  return (
    <StyledBackdrop open={open} onClick={onClose}>
      <ContentWrapper onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>

        <NavButton onClick={() => onNavigate('prev')} position="left">
          <ArrowBackIos />
        </NavButton>
        <NavButton onClick={() => onNavigate('next')} position="right">
          <ArrowForwardIos />
        </NavButton>

        <img
          src={currentImage.url}
          alt="Enlarged"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 8,
          }}
        />
      </ContentWrapper>
    </StyledBackdrop>
  );
};

export default BackdropViewer;
