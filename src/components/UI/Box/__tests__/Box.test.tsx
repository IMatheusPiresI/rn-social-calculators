import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { WrapperTheme } from '@resources/helpers/tests/WrapperTheme';
import theme from '@resources/theme';

import { Box } from '..';

describe('Box Tests', () => {
  it('should be render Box component', () => {
    render(<Box width={20} height={20} testID="box" />);

    const box = screen.getByTestId('box');

    expect(box).toBeTruthy();
  });

  it('should be render correct background selected', () => {
    render(
      <WrapperTheme>
        <Box
          width={20}
          height={20}
          backgroundColor="mainBackground"
          testID="box"
        />
      </WrapperTheme>,
    );

    const box = screen.getByTestId('box');

    expect(box.props.style.backgroundColor).toBe(theme.colors.mainBackground);
  });
});
