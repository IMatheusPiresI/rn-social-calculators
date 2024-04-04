import { Control, FieldError } from 'react-hook-form';
import { IFormSimpleInterestValues } from '../../../screens/SimpleInterest/hooks/useSimpleInterestForm/types';
import { MaskInputProps } from 'react-native-mask-input';

export type ITextInputFormProps = {
  name: string;
  control?: Control<any> | undefined;
  error: FieldError | undefined;
  label?: string;
  hideError?: boolean;
} & MaskInputProps;
