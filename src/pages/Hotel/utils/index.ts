import { PhotoResponse } from '../types';

export const generateSkeletonGallery = (count: number): Partial<PhotoResponse>[] =>
  Array.from({ length: count }, () => ({ url: '' }));
