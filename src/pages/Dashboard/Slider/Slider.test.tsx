import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from './Slider';

describe('<Slider />', () => {
  test('it should mount', (props:any) => {
    const {getValue} = props
    render(<Slider getValue={getValue}/>);
    
    const slider = screen.getByTestId('Slider');

    expect(slider).toBeInTheDocument();
  });
});