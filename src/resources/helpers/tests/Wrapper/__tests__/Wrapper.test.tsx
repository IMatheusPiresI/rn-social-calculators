import { render, screen } from '@testing-library/react-native';
import { Box } from '@components/UI/Box';
import React from 'react';

import { Wrapper } from '..';

describe('Wrapper Tests', () => {
  it('should be render Wrapper', () => {
    render(
      <Wrapper>
        <Box testID="wrapperChildren" />
      </Wrapper>,
    );

    const wrapperChildren = screen.getByTestId('wrapperChildren');
    expect(wrapperChildren).toBeTruthy();
  });
});
