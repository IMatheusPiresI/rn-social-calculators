import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { simpleInterestSchema } from './schema/simpleInsterestSchema';
import { IFormSimpleInterestValues } from './types';

export const useSimpleInterestForm = () => {
  const {
    control,
    formState: { errors, isValid },
    watch,
    handleSubmit,
  } = useForm<IFormSimpleInterestValues>({
    values: {
      initialValue: '',
      interestRatePeriodValue: '',
      timePeriodValue: '',
    },
    resolver: zodResolver(simpleInterestSchema),
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
