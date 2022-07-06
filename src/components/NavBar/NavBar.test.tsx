import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  test('it should mount', (props:any) => {
    const {component} = props
    render(<NavBar component={component}/>);
    
    const navBar = screen.getByTestId('NavBar');

    expect(navBar).toBeInTheDocument();
  });
});