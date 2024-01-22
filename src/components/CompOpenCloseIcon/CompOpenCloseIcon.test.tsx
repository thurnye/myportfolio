import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompOpenCloseIcon from './CompOpenCloseIcon';

describe('<CompOpenCloseIcon />', () => {
  test('it should mount', () => {
    render(<CompOpenCloseIcon open={false}/>);
    
    const compOpenCloseIcon = screen.getByTestId('CompOpenCloseIcon');

    expect(compOpenCloseIcon).toBeInTheDocument();
  });
});