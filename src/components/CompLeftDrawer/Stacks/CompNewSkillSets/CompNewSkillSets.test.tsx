import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompNewSkillSets from './CompNewSkillSets';

describe('<CompNewSkillSets />', () => {
  test('it should mount', () => {
    render(<CompNewSkillSets />);
    
    const compNewSkillSets = screen.getByTestId('CompNewSkillSets');

    expect(compNewSkillSets).toBeInTheDocument();
  });
});