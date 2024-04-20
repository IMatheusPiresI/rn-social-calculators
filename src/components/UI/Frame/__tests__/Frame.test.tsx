import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Box } from '@components/UI/Box';

import { Frame } from '..';

describe('Frame Tests', () => {
  it('should be render Frame', () => {
    render(
      <Frame>
        <Box />
      </Frame>,
    );

    const frame = screen.getByTestId('frame');

    expect(frame).toBeTruthy();
  });

  it('should be render scrollable Container', () => {
    render(
      <Frame scrollable>
        <Box />
      </Frame>,
    );

    const frameContainer = screen.getByTestId('keyboardDismiss');

    expect(frameContainer.type).toBe('RCTScrollView');
  });

  it('should be render not scrollable Container', () => {
    render(
      <Frame>
        <Box />
      </Frame>,
    );

    const frameContainer = screen.getByTestId('keyboardDismiss');

    expect(frameContainer.type).toBe('View');
  });
});
