import { z } from 'zod';
import { selicXSavingAccountSchema } from './schema/selicXSavingAccountSchema';

export type IFormSelicXSavingAccount = z.infer<
  typeof selicXSavingAccountSchema
>;
