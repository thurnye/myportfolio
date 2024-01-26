import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompGalleryLayout from './CompGalleryLayout';

describe('<CompGalleryLayout />', () => {
  test('it should mount', () => {
    render(<CompGalleryLayout layout={{label: '', name: ''}} num={0}/>);
    
    const compGalleryLayout = screen.getByTestId('CompGalleryLayout');

    expect(compGalleryLayout).toBeInTheDocument();
  });
});