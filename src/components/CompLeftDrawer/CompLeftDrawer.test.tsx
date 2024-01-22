import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompLeftDrawer from './CompLeftDrawer';

describe('<CompLeftDrawer />', () => {
  test('it should mount', () => {
    render(<CompLeftDrawer />);
    
    const compLeftDrawer = screen.getByTestId('CompLeftDrawer');

    expect(compLeftDrawer).toBeInTheDocument();
  });
});