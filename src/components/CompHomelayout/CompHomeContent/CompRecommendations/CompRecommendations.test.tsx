import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompRecommendations from './CompRecommendations';

describe('<CompRecommendations />', () => {
  test('it should mount', () => {
    render(<CompRecommendations />);
    
    const compRecommendations = screen.getByTestId('CompRecommendations');

    expect(compRecommendations).toBeInTheDocument();
  });
});