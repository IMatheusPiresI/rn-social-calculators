import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { WrapperTheme } from '@resources/helpers/tests/Wrapper';

import { Typograph } from '..';

describe('Typograph Tests', () => {
  it('should be render correct text', () => {
    render(
      <WrapperTheme>
        <Typograph>Text</Typograph>
      </WrapperTheme>,
    );

    expect(screen.getByText('Text')).toBeTruthy();
  });

  it('should be render correct alignment', () => {
    const alignment = 'justify';
    render(
      <WrapperTheme>
        <Typograph alignment={alignment}>Text</Typograph>
      </WrapperTheme>,
    );
    const typograph = screen.getByText('Text');
    expect(typograph.props.style.textAlign).toBe(alignment);
  });

  it('should be render correct lineHeight', () => {
    const lineHeight = 16;
    render(
      <WrapperTheme>
        <Typograph lineHeight={lineHeight}>Text</Typograph>
      </WrapperTheme>,
    );
    const typograph = screen.getByText('Text');
    expect(typograph.props.style.lineHeight).toBe(lineHeight);
  });
});
