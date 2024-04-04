import { z } from 'zod';
import { emergencyReserveSchema } from '.';

export type IFormEmergencyReserveValues = z.infer<
  typeof emergencyReserveSchema
>;
