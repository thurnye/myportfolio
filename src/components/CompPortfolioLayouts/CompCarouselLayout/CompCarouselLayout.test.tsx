import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompCarouselLayout from './CompCarouselLayout';

describe('<CompCarouselLayout />', () => {
  test('it should mount', () => {
    render(<CompCarouselLayout />);
    
    const compCarouselLayout = screen.getByTestId('CompCarouselLayout');

    expect(compCarouselLayout).toBeInTheDocument();
  });
});