import * as z from 'zod';
import { formatOnlyNumbersCurrency } from '../../../../../resources/utils/formatOnlyNumbersCurrency';

export const selicXSavingAccountSchema = z.object({
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
  monthValue: z
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
  period: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine(
      (value) => {
        return Number(value) > 0;
      },
      {
        message: 'Campo obrigatório',
      },
    ),
});
