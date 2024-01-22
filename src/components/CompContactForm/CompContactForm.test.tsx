import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompContactForm from './CompContactForm';

describe('<CompContactForm />', () => {
  test('it should mount', () => {
    render(<CompContactForm />);
    
    const compContactForm = screen.getByTestId('CompContactForm');

    expect(compContactForm).toBeInTheDocument();
  });
});