import { Control, FieldError } from 'react-hook-form';
import { IFormSimpleInterestValues } from '@screens/SimpleInterest/hooks/useSimpleInterestForm/types';
import { TextInputProps } from 'react-native';

export type ITextInputFormProps = {
  name: keyof IFormSimpleInterestValues;
  control?: Control<IFormSimpleInterestValues> | undefined;
  error: FieldError | undefined;
  label: string;
} & TextInputProps;
