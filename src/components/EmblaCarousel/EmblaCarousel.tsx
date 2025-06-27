import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselProps } from './EmblaCarousel.type';
import { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Container, NextButton, PrevButton, Slide, Viewport } from './EmblaCarousel.style';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const EmblaCarousel = ({
  children,
  options = { loop: true, align: 'start', containScroll: 'trimSnaps' },
  showButtons = true,
}: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [showNav, setShowNav] = useState(false);

  const onScrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onScrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const checkScroll = () => {
      const canScroll = emblaApi.canScrollNext() || emblaApi.canScrollPrev();
      setShowNav(canScroll);
    };

    checkScroll();
    emblaApi.on('reInit', checkScroll);

    return () => {
      emblaApi.off('reInit', checkScroll);
    };
  }, [emblaApi, children]);

  return (
    <Box position={'relative'} width={'100%'} role="region" aria-label={'carousel'}>
      <Viewport ref={emblaRef}>
        <Container>{children}</Container>
      </Viewport>

      {showButtons && showNav && (
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

EmblaCarousel.Slide = Slide;

export default EmblaCarousel;
