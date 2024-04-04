import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PercentageSizes } from '../../../../components/BoxSelectPercentage/constants';

export const useEmergencyReserve = () => {
  const [percentageSize, setPercentageSize] = useState<PercentageSizes>(
    PercentageSizes.SMALL,
  );

  return { percentageSize, setPercentageSize };
};
