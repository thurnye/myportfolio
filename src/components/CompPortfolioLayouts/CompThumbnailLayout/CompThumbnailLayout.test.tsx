import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompThumbnailLayout from './CompThumbnailLayout';

describe('<CompThumbnailLayout />', () => {
  test('it should mount', () => {
    render(<CompThumbnailLayout />);
    
    const compThumbnailLayout = screen.getByTestId('CompThumbnailLayout');

    expect(compThumbnailLayout).toBeInTheDocument();
  });
});