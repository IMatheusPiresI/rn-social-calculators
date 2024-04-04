import * as z from 'zod';
import { compoundInterestSchema } from './schema/compoundInsterestSchema';

export type IFormCompoundInterestValues = z.infer<
  typeof compoundInterestSchema
>;
