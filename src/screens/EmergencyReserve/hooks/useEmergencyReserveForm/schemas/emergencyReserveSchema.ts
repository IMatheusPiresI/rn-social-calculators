import * as z from 'zod';
import { formatOnlyNumbersCurrency } from '@resources/utils/formatOnlyNumbersCurrency';

export const emergencyReserveSchema = z.object({
  fixedCost: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatOnlyNumbersCurrency(value)) > 0, {
      message: 'Campo obrigatório',
    }),
  monthlySalary: z
    .string()
    .min(1, 'Campo obrigatório')
    .refine((value) => Number(formatOnlyNumbersCurrency(value)) > 0, {
      message: 'Campo obrigatório',
    }),
});
