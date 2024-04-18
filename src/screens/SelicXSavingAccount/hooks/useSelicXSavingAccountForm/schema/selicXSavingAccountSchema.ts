import * as z from 'zod';
import { formatOnlyNumbersCurrency } from '@resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '@resources/utils/formatPeriodNumberValue';

export const selicXSavingAccountSchema = z.object({
  initialValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatOnlyNumbersCurrency(value)) > 0, {
      message: 'Campo obrigatório',
    }),
  monthValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatOnlyNumbersCurrency(value)) > 0, {
      message: 'Campo obrigatório',
    }),
  period: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatPeriodNumberValue(value)) > 0, {
      message: 'Campo obrigatório',
    }),
});
