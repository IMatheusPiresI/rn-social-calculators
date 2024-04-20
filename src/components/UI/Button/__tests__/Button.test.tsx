import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import theme from '@resources/theme';
import { WrapperTheme } from '@resources/helpers/tests/Wrapper';

import { Button } from '..';

describe('Button Tests', () => {
  it('should be render correct title button', () => {
    render(
      <WrapperTheme>
        <Button title="Title" />
      </WrapperTheme>,
    );

    expect(screen.getByText('Title')).toBeTruthy();
  });

  it('should be call onPress function', () => {
    const onPress = jest.fn();

    render(
      <WrapperTheme>
        <Button title="Title" onPress={onPress} />
      </WrapperTheme>,
    );

    const button = screen.getByTestId('button');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should be render correct variant', () => {
    render(
      <WrapperTheme>
        <Button title="Title" variant="secondary" />
      </WrapperTheme>,
    );

    const button = screen.getByTestId('button');

    expect(button.props.style.backgroundColor).toBe(theme.colors.secondary);
  });

  it('should be render correct backgroundColor disabled', () => {
    render(
      <WrapperTheme>
        <Button title="Title" variant="secondary" disabled />
      </WrapperTheme>,
    );

    const button = screen.getByTestId('button');

    expect(button.props.style.backgroundColor).toBe(theme.colors.disabled);
  });
});
