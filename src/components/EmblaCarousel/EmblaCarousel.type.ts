import { ReactNode } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';

export interface EmblaCarouselProps {
  children: ReactNode;
  options?: EmblaOptionsType;
  showButtons?: boolean;
  ariaLabel?: string;
}

export interface SlideProps {
  width?: string;
}
