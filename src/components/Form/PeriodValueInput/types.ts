import { Control, FieldError } from 'react-hook-form';
import { MaskInputProps } from 'react-native-mask-input';
import { PeriodType } from './constants';

export type ITextInputFormProps = {
  name: string;
  control?: Control<any> | undefined;
  error: FieldError | undefined;
  label: string;
  typeSelected: PeriodType;
  onSelectPeriod: (period: PeriodType) => void;
  monthlyLabel: string;
  yearlyLabel: string;
} & MaskInputProps;
