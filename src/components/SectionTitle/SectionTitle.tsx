import React from 'react';
import { StyledSectionTitle } from './SectionTitle.styles';
import { SectionTitleProps } from './SectionTitle.type';

const SectionTitle = ({ children, variant = 'h3' }: SectionTitleProps) => {
  return <StyledSectionTitle variant={variant}>{children}</StyledSectionTitle>;
};

export default SectionTitle;
