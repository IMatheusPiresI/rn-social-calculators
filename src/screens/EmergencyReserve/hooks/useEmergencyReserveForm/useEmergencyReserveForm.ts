import { useForm } from 'react-hook-form';
import { IFormEmergencyReserveValues, emergencyReserveSchema } from '.';
import { zodResolver } from '@hookform/resolvers/zod';

export const useEmergencyReserveForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
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
  };
};
