import * as z from 'zod';
import { simpleInterestSchema } from './schema/simpleInsterestSchema';

export type IFormSimpleInterestValues = z.infer<typeof simpleInterestSchema>;
