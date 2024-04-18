import styled, { css } from 'styled-components/native';
import { fonts } from '@resources/theme/fonts';

import { ITypographStyleProps } from './types';

export const TypographText = styled.Text<ITypographStyleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  font-family: ${({ font }) => fonts[font]};

  ${({ alignment }) =>
    alignment &&
    css`
      text-align: ${alignment};
    `}

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
`;
