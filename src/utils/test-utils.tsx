import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Simple custom render function that just re-exports the default render
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { ...options });

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override render method
export { customRender as render };
