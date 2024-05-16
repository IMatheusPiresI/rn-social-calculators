import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { formatCurrency } from '@resources/utils/formatCurrency';

import { ModalEmergencyReserve } from '..';
import { modalEmergencyReserveMock } from '../mocks/modalEmergencyReserveMock';

describe('ModalEmergencyReserve Tests', () => {
  it('should be render ModalEmergencyReserve', () => {
    render(
      <ModalEmergencyReserve
        emergencyReserveData={modalEmergencyReserveMock}
        isVisible
        onClose={() => {}}
      />,
    );

    const modalEmergencyReserve = screen.getByTestId('modalEmergencyReserve');

    expect(modalEmergencyReserve).toBeTruthy();
  });

  it('should be press onClose and called', () => {
    const onClose = jest.fn();
    render(
      <ModalEmergencyReserve
        emergencyReserveData={modalEmergencyReserveMock}
        isVisible
        onClose={onClose}
      />,
    );

    const modalEmergencyReserveCloseButton = screen.getByTestId(
      'modalEmergencyReserveCloseButton',
    );

    fireEvent.press(modalEmergencyReserveCloseButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should be render correct values ModalEmergencyReserve', () => {
    render(
      <ModalEmergencyReserve
        emergencyReserveData={{
          percentageSave: 20,
          reserveEmergencyValue: 20000,
          saveMonthly: 1240,
          timeFinishInMonth: 12,
        }}
        isVisible
        onClose={() => {}}
      />,
    );

    const modalPercentageSave = screen.getByText(
      `Guardando ${modalEmergencyReserveMock.percentageSave}% do seu salário`,
    );

    const modalReserveEmergencyValue = screen.getByText(
      `R$ ${formatCurrency(modalEmergencyReserveMock.reserveEmergencyValue)}`,
    );

    const modalSaveMonthly = screen.getByText(
      `R$ ${formatCurrency(modalEmergencyReserveMock.saveMonthly)}`,
    );

    const modalTimeFinishInMonth = screen.getByText(
      `${modalEmergencyReserveMock.timeFinishInMonth} meses`,
    );

    expect(modalPercentageSave).toBeTruthy();
    expect(modalReserveEmergencyValue).toBeTruthy();
    expect(modalSaveMonthly).toBeTruthy();
    expect(modalTimeFinishInMonth).toBeTruthy();
  });
});
