import { TouchableOpacityProps } from 'react-native';

export type IButtonVariant = {
  variant?: 'secondary';
};

export type IButtonProps = {
  title: string;
} & TouchableOpacityProps &
  IButtonVariant;
