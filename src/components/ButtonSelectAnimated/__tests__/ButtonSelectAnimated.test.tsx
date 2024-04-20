import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Wrapper } from '@resources/helpers/tests/Wrapper';
import { useSharedValue } from 'react-native-reanimated';
import theme from '@resources/theme';

import { ButtonSelectAnimated } from '..';

describe('ButtonSelectAnimated', () => {
  beforeEach(() => {
    (useSharedValue as jest.Mock).mockReturnValue({ value: 0 });
  });

  it('should be apply the correct animation backgroundColor and color value start', () => {
    jest.useFakeTimers({ advanceTimers: true });
    (useSharedValue as jest.Mock).mockReturnValue({ value: 1 });

    render(
      <Wrapper>
        <ButtonSelectAnimated
          isActive={true}
          label="Teste"
          boxActiveColor="primary"
          boxInativeColor="secondary"
          textActiveColor="error"
          textInativeColor="placeholder"
        />
      </Wrapper>,
    );

    const boxActiveColor = 'rgba(4, 76, 137, 1)';
    const textActiveColor = 'rgba(247, 37, 37, 1)';
    const buttonSelectAnimatedBox = screen.getByTestId(
      'buttonSelectAnimatedBox',
    );
    const buttonSelectAnimatedText = screen.getByTestId(
      'buttonSelectAnimatedText',
    );

    jest.advanceTimersByTime(200);
    expect(buttonSelectAnimatedBox).toHaveAnimatedStyle({
      backgroundColor: boxActiveColor,
    });
    expect(buttonSelectAnimatedText).toHaveAnimatedStyle({
      color: textActiveColor,
    });
  });

  it('should be apply the correct animation backgroundColor and color value end', () => {
    jest.useFakeTimers({ advanceTimers: true });
    render(
      <Wrapper>
        <ButtonSelectAnimated
          isActive={true}
          label="Teste"
          boxActiveColor="primary"
          boxInativeColor="secondary"
          textActiveColor="error"
          textInativeColor="placeholder"
        />
      </Wrapper>,
    );

    const boxInativeColor = 'rgba(240, 242, 243, 1)';
    const textInativeColor = 'rgba(4, 76, 137, 0.8)';
    const buttonSelectAnimatedBox = screen.getByTestId(
      'buttonSelectAnimatedBox',
    );
    const buttonSelectAnimatedText = screen.getByTestId(
      'buttonSelectAnimatedText',
    );

    expect(buttonSelectAnimatedBox).toHaveAnimatedStyle({
      backgroundColor: boxInativeColor,
    });

    expect(buttonSelectAnimatedText).toHaveAnimatedStyle({
      color: textInativeColor,
    });
  });

  it('should be render the borders horizontal and correct color borders', () => {
    render(
      <Wrapper>
        <ButtonSelectAnimated
          isActive={false}
          label="Teste"
          boxActiveColor="primary"
          boxInativeColor="secondary"
          textActiveColor="error"
          textInativeColor="placeholder"
          borderHorizontal
          borderColor="primary"
        />
      </Wrapper>,
    );

    const buttonSelectAnimated = screen.getByTestId('buttonSelectAnimated');

    expect(buttonSelectAnimated.props.style.borderLeftWidth).toBe(1);
    expect(buttonSelectAnimated.props.style.borderRightWidth).toBe(1);
    expect(buttonSelectAnimated.props.style.borderColor).toBe(
      theme.colors.primary,
    );
  });

  it('should be render the borders horizontal and correct default borderColor', () => {
    render(
      <Wrapper>
        <ButtonSelectAnimated
          isActive={true}
          label="Teste"
          boxActiveColor="primary"
          boxInativeColor="secondary"
          textActiveColor="error"
          textInativeColor="placeholder"
          borderHorizontal
        />
      </Wrapper>,
    );

    const buttonSelectAnimated = screen.getByTestId('buttonSelectAnimated');

    expect(buttonSelectAnimated.props.style.borderLeftWidth).toBe(1);
    expect(buttonSelectAnimated.props.style.borderRightWidth).toBe(1);
    expect(buttonSelectAnimated.props.style.borderColor).toBe(
      theme.colors.primary,
    );
  });
});
