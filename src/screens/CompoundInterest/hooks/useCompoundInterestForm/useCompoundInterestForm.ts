import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { compoundInterestSchema } from './schema/compoundInsterestSchema';
import { IFormCompoundInterestValues } from './types';

export const useCompoundInterestForm = () => {
  const {
    control,
    formState: { errors, isValid },
    watch,
    handleSubmit,
  } = useForm<IFormCompoundInterestValues>({
    values: {
      initialValue: '',
      monthlyValue: '',
      interestRatePeriodValue: '',
      timePeriodValue: '',
    },
    resolver: zodResolver(compoundInterestSchema),
    mode: 'onSubmit',
  });

  const watchedFields = watch();

  return {
    control,
    errors,
    isValid,
    watchedFields,
    handleSubmit,
  };
};
