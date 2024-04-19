import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Box } from '@components/UI/Box';
import { Keyboard } from 'react-native';

import { KeyboardAvoid } from '..';

describe('KeyboardAvoid Tests', () => {
  it('should be render KeyboardAvoid', () => {
    render(
      <KeyboardAvoid>
        <></>
      </KeyboardAvoid>,
    );

    const keyboardAvoid = screen.getByTestId('keyboardAvoid');

    expect(keyboardAvoid).toBeTruthy();
  });

  it('should be render children KeyboardAvoid', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => {
      const Platform = jest.requireActual(
        'react-native/Libraries/Utilities/Platform',
      );
      Platform.OS = 'android';
      return Platform;
    });
    render(
      <KeyboardAvoid>
        <Box />
      </KeyboardAvoid>,
    );

    const keyboardChildren = screen.getByTestId('keyboardDismiss');

    expect(keyboardChildren).toBeTruthy();
  });

  it('should be render children KeyboardAvoidd', () => {
    const dismissMock = jest.spyOn(Keyboard, 'dismiss');
    jest.mock('react-native/Libraries/Utilities/Platform', () => {
      const Platform = jest.requireActual(
        'react-native/Libraries/Utilities/Platform',
      );
      Platform.OS = 'ios';
      return Platform;
    });
    render(
      <KeyboardAvoid>
        <Box />
      </KeyboardAvoid>,
    );
    const keyboardDismiss = screen.getByTestId('keyboardDismiss');

    fireEvent.press(keyboardDismiss);
    expect(dismissMock).toHaveBeenCalled();
  });
});
