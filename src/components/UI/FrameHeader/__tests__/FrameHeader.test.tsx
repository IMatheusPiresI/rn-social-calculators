import { FrameHeader } from '@components/UI/FrameHeader';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  WrapperNavigator,
  WrapperTheme,
} from '@resources/helpers/tests/Wrapper';

jest.mock('phosphor-react-native', () => ({
  ArrowCircleLeft: jest.fn().mockReturnValue(null),
}));

describe('Frame Tests', () => {
  it('should be render Frame Header', () => {
    render(
      <WrapperNavigator>
        <FrameHeader />
      </WrapperNavigator>,
    );

    const frameHeader = screen.getByTestId('frameHeader');

    expect(frameHeader).toBeTruthy();
  });

  it('should be render Frame Header go back button', () => {
    const mockGoBack = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ goBack: mockGoBack });

    render(
      <WrapperNavigator>
        <WrapperTheme>
          <FrameHeader canGoBack />
        </WrapperTheme>
      </WrapperNavigator>,
    );

    const buttonGoBack = screen.getByTestId('frameHeaderGoBack');

    expect(buttonGoBack).toBeTruthy();

    fireEvent.press(buttonGoBack);

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});
