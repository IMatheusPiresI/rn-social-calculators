import { TouchableOpacityProps } from 'react-native';
import { IColors } from '../../resources/theme/colors';

export type IButtonTypeRenderInterestProps = {
  label: string;
  isActive: boolean;
  boxInativeColor: IColors;
  boxActiveColor: IColors;
  textInativeColor: IColors;
  textActiveColor: IColors;
  borderHorizontal?: boolean;
  borderColor?: IColors;
} & TouchableOpacityProps;

export type IButtonStyleProps = {
  borderHorizontal?: boolean;
  borderColor?: IColors;
};
