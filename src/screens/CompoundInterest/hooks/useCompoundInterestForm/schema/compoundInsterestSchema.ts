import * as z from 'zod';
import { formatOnlyNumbersCurrency } from '../../../../../resources/utils/formatOnlyNumbersCurrency';

export const compoundInterestSchema = z.object({
  initialValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine(
      (value) => {
        return Number(formatOnlyNumbersCurrency(value)) > 0;
      },
      {
        message: 'Campo obrigatório',
      },
    ),
  monthlyValue: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine(
      (value) => {
        return Number(formatOnlyNumbersCurrency(value)) >= 0;
      },
      {
        message: 'Campo obrigatório',
      },
    ),
  interestRatePeriodValue: z.string().min(1, 'Campo obrigatório'),
  timePeriodValue: z.string().min(1, 'Campo obrigatório'),
});
