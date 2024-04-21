import { render, screen } from '@testing-library/react-native';
import React from 'react';
import LogoPNG from '@assets/images/logo.jpg';

import { CardCalculatorType } from '..';

describe('CardCalculatorType Tests', () => {
  it('should be render CardCalculatorType', () => {
    const title = 'Juros compostos';
    render(<CardCalculatorType image={LogoPNG} title={title} />);

    const titleCardCalculator = screen.getByText(title);

    expect(titleCardCalculator).toBeTruthy();
  });
});
