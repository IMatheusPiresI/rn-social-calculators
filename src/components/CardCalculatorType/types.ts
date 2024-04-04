import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

export type ICardCalculatorProps = {
  title: string;
  image: ImageSourcePropType;
} & TouchableOpacityProps;
