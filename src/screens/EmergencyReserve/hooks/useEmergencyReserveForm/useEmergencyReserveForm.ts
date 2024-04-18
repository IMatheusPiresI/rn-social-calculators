import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { IFormEmergencyReserveValues, emergencyReserveSchema } from '.';

export const useEmergencyReserveForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormEmergencyReserveValues>({
    values: {
      fixedCost: '',
      monthlySalary: '',
    },
    resolver: zodResolver(emergencyReserveSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
    isValid,
  };
};
