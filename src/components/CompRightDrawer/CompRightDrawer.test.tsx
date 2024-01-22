import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompRightDrawer from './CompRightDrawer';

describe('<CompRightDrawer />', () => {
  test('it should mount', () => {
    render(<CompRightDrawer onClose={() => 0}/>);
    
    const compRightDrawer = screen.getByTestId('CompRightDrawer');

    expect(compRightDrawer).toBeInTheDocument();
  });
});