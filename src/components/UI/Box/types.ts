import { ViewStyle } from 'react-native';
import { IColors } from '@resources/theme/colors';

export interface IBoxProps extends ViewStyle {
  backgroundColor?: IColors;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
}
