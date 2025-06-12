import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselProps } from './EmblaCarousel.type';
import { useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { Container, NextButton, PrevButton, Viewport } from './EmblaCarousel.style';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const EmblaCarousel = ({
  children,
  options = { loop: true, align: 'start' },
  showButtons = true,
  ariaLabel = 'carousel',
}: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const onScrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onScrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, children]);

  return (
    <Box position={'relative'} width={'100%'} role="region" aria-label={ariaLabel}>
      <Viewport ref={emblaRef}>
        <Container>{children}</Container>
      </Viewport>

      {showButtons && (
        <>
          <PrevButton onClick={onScrollPrev} aria-label="Scroll back">
            <ChevronLeft />
          </PrevButton>

          <NextButton onClick={onScrollNext} aria-label="Scroll forward">
            <ChevronRight />
          </NextButton>
        </>
      )}
    </Box>
  );
};

export default EmblaCarousel;
