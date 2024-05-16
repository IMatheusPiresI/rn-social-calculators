import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import {
  Profissions,
  profissions,
} from '@screens/EmergencyReserve/hooks/useEmergencyReserve/constants';

import { ModalSelectProfission } from '..';

describe('ModalSelectProfission Test', () => {
  it('should be render ModalSelectProfission', () => {
    const onClose = jest.fn();
    const onSelectProfission = jest.fn();

    render(
      <ModalSelectProfission
        isVisible
        onClose={onClose}
        onSelectProfission={onSelectProfission}
      />,
    );
  });

  it('should be press onClose', () => {
    const onClose = jest.fn();

    render(
      <ModalSelectProfission
        isVisible
        onClose={onClose}
        onSelectProfission={() => {}}
      />,
    );

    const modalSelectProfissionCloseButton = screen.getByTestId(
      'modalSelectProfissionCloseButton',
    );

    fireEvent.press(modalSelectProfissionCloseButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should be press onSelectProfission', () => {
    const onSelectProfission = jest.fn();

    render(
      <ModalSelectProfission
        isVisible
        onClose={() => {}}
        onSelectProfission={onSelectProfission}
      />,
    );

    const modalSelectProfissionButton = screen.getByText(
      profissions[Profissions.CLT],
    );

    fireEvent.press(modalSelectProfissionButton);

    expect(onSelectProfission).toBeTruthy();
  });
});
