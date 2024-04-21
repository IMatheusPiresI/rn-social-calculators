import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { ContainerCalculatorTypes } from '..';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('ContainerCalculatorTypes Tests', () => {
  it('should be render ContainerCalculatorTypes', () => {
    render(<ContainerCalculatorTypes />);

    const containerCalculator = screen.getByTestId('containerCalculatorTypes');

    expect(containerCalculator).toBeTruthy();
  });

  it('should be call handleNavigate with the vale SimpleInterest route', () => {
    render(<ContainerCalculatorTypes />);

    const buttonSimpleInterest = screen.getByTestId('buttonSimpleInterest');

    fireEvent.press(buttonSimpleInterest);

    expect(mockNavigate).toHaveBeenCalledWith('SimpleInterest');
  });

  it('should be call handleNavigate with the vale CompoundInterest route', () => {
    render(<ContainerCalculatorTypes />);

    const buttonCompoundInterest = screen.getByTestId('buttonCompoundInterest');

    fireEvent.press(buttonCompoundInterest);

    expect(mockNavigate).toHaveBeenCalledWith('CompoundInterest');
  });

  it('should be call handleNavigate with the vale SelicXSavingAccount route', () => {
    render(<ContainerCalculatorTypes />);

    const buttonSelicXSavingAccount = screen.getByTestId(
      'buttonSelicXSavingAccount',
    );

    fireEvent.press(buttonSelicXSavingAccount);

    expect(mockNavigate).toHaveBeenCalledWith('SelicXSavingAccount');
  });

  it('should be call handleNavigate with the vale EmergencyReserve route', () => {
    render(<ContainerCalculatorTypes />);

    const buttonEmergencyReserve = screen.getByTestId('buttonEmergencyReserve');

    fireEvent.press(buttonEmergencyReserve);

    expect(mockNavigate).toHaveBeenCalledWith('EmergencyReserve');
  });
});
