import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompSiteLayout from './CompSiteLayout';

describe('<CompSiteLayout />', () => {
  test('it should mount', () => {
    render(<CompSiteLayout />);
    
    const compSiteLayout = screen.getByTestId('CompSiteLayout');

    expect(compSiteLayout).toBeInTheDocument();
  });
});