import { Control, FieldError } from 'react-hook-form';
import { IFormSimpleInterestValues } from '../../../screens/SimpleInterest/hooks/useSimpleInterestForm/types';
import { MaskInputProps } from 'react-native-mask-input';
import { PeriodType } from './constants';

export type ITextInputFormProps = {
  name: keyof IFormSimpleInterestValues;
  control?: Control<any> | undefined;
  error: FieldError | undefined;
  label: string;
  typeSelected: PeriodType;
  onSelectPeriod: (period: PeriodType) => void;
  monthlyLabel: string;
  yearlyLabel: string;
} & MaskInputProps;
