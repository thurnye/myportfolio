import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompFeatherIcon from './CompFeatherIcon';

describe('<CompFeatherIcon />', () => {
  test('it should mount', () => {
    render(<CompFeatherIcon icon={<></>} />);
    
    const compFeatherIcon = screen.getByTestId('CompFeatherIcon');

    expect(compFeatherIcon).toBeInTheDocument();
  });
});