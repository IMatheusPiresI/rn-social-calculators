import { ReactNode } from 'react';
import { IFonts } from '@resources/theme/fonts';
import { IColors } from '@resources/theme/colors';
import { TextProps } from 'react-native';

export type ITypographProps = {
  children: ReactNode;
  fontSize?: number;
  font?: IFonts;
  color?: IColors;
  alignment?: 'justify' | 'center';
  lineHeight?: number;
} & TextProps;

export type ITypographStyleProps = {
  font: IFonts;
  fontSize: number;
  color: string;
  alignment?: string;
  lineHeight?: number;
};
