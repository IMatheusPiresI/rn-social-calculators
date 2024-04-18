import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { selicXSavingAccountSchema } from './schema/selicXSavingAccountSchema';
import { IFormSelicXSavingAccount } from './types';

export const useSelicXSavingAccountForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormSelicXSavingAccount>({
    defaultValues: {
      initialValue: '',
      monthValue: '',
      period: '',
    },
    resolver: zodResolver(selicXSavingAccountSchema),
  });

  return {
    control,
    isValid,
    handleSubmit,
    errors,
  };
};
