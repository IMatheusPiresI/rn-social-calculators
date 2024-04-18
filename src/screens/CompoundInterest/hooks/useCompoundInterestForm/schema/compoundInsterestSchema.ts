import * as z from 'zod';
import { formatOnlyNumbersCurrency } from '@resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '@resources/utils/formatPeriodNumberValue';

export const compoundInterestSchema = z.object({
  initialValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatOnlyNumbersCurrency(value)) > 0, {
      message: 'Campo obrigatório',
    }),
  monthlyValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatOnlyNumbersCurrency(value)) >= 0, {
      message: 'Campo obrigatório',
    }),
  interestRatePeriodValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatPeriodNumberValue(value)) > 0, {
      message: 'Campo obrigatório',
    }),
  timePeriodValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatPeriodNumberValue(value)) > 0, {
      message: 'Campo obrigatório',
    }),
});
