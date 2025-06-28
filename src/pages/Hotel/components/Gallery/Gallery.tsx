import { Typography } from '@mui/material';
import { useState, useMemo } from 'react';
import { useFetchGallery } from '../../hooks';
import { generateSkeletonGallery, getImageSrcSet } from '../../utils';
import {
  GalleryWrapper,
  MainImageWrapper,
  MainImage,
  SideImageGrid,
  SideImageWrapper,
  SideImage,
  OverlayText,
  SkeletonBox,
} from './Gallery.style';
import { GallaryProps } from './Gallery.types';
import { BackdropViewer } from '../';
import { MAX_GALLERY_SIDE_IMAGES } from '../../constants';
import { PhotoResponse } from '../../types';

const Gallery = ({ id }: GallaryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { hotelGalary, isPending } = useFetchGallery(id);

  const fallbackGallery = useMemo(
    () => generateSkeletonGallery(hotelGalary?.length || 5),
    [hotelGalary?.length]
  );
  const finalGallery = useMemo(
    () => (isPending ? fallbackGallery : hotelGalary || []),
    [isPending, fallbackGallery, hotelGalary]
  );

  const allPhotos = useMemo(() => finalGallery, [finalGallery]);

  const mainPhoto = finalGallery[0];
  const sidePhotos = finalGallery.slice(1, MAX_GALLERY_SIDE_IMAGES + 1);
  const extraCount = (hotelGalary?.length || 0) - (MAX_GALLERY_SIDE_IMAGES + 1);

  const handleClick = (index: number) => {
    if (!isPending && allPhotos[index]?.url) {
      setSelectedIndex(index);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (selectedIndex === null) return;
    const total = allPhotos.length;
    const nextIndex =
      direction === 'next' ? (selectedIndex + 1) % total : (selectedIndex - 1 + total) % total;
    setSelectedIndex(nextIndex);
  };

  if (!isPending && finalGallery.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" mt={2}>
        No images available for this hotel.
      </Typography>
    );
  }

  if (isPending) {
    return <SkeletonBox height={'450px'} />;
  }

  return (
    <>
      <GalleryWrapper>
        <MainImageWrapper>
          <MainImage
            {...getImageSrcSet(mainPhoto.url, 500)}
            alt={`Main photo ${mainPhoto.id}`}
            loading="lazy"
            onClick={() => handleClick(0)}
          />
        </MainImageWrapper>

        <SideImageGrid count={sidePhotos.length}>
          {sidePhotos.map((photo, index) => {
            const isLast = index === MAX_GALLERY_SIDE_IMAGES - 1 && extraCount > 0;
            return (
              <SideImageWrapper key={photo?.id ?? index} onClick={() => handleClick(index + 1)}>
                <>
                  <SideImage
                    {...getImageSrcSet(photo.url, 200)}
                    loading="lazy"
                    alt={`Side photo ${photo.id}`}
                  />
                  {isLast && <OverlayText>+{extraCount} more</OverlayText>}
                </>
              </SideImageWrapper>
            );
          })}
        </SideImageGrid>
      </GalleryWrapper>

      {selectedIndex !== null && (
        <BackdropViewer
          open={selectedIndex !== null}
          onClose={handleClose}
          currentImage={allPhotos[selectedIndex] as PhotoResponse}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
};

export default Gallery;
