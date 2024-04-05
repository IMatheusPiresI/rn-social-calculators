import { useMemo, useState } from 'react';
import { PercentageSizes } from '../../../../components/BoxSelectPercentage/constants';
import { Profissions } from '../../../../components/Modal/ModalSelectProfission/constants';
import {
  IFormEmergencyReserveValues,
  useEmergencyReserveForm,
} from '../useEmergencyReserveForm';
import { formatOnlyNumbersCurrency } from '../../../../resources/utils/formatOnlyNumbersCurrency';

export const useEmergencyReserve = () => {
  const { control, errors, isValid, handleSubmit } = useEmergencyReserveForm();
  const [percentageSize, setPercentageSize] = useState<PercentageSizes>(
    PercentageSizes.SMALL,
  );
  const [profissionSelected, setProfissionSelected] = useState<Profissions>(
    Profissions.UNINFORMED,
  );

  const disabledButton = useMemo(() => {
    if (!isValid || profissionSelected === Profissions.UNINFORMED) return true;

    return false;
  }, [isValid, profissionSelected]);

  const submitSimpleInsterestForm = (values: IFormEmergencyReserveValues) => {
    const fixedCost = formatOnlyNumbersCurrency(values.fixedCost);
    const monthlySalary = formatOnlyNumbersCurrency(values.monthlySalary);
    console.log(fixedCost);
    console.log(monthlySalary);
  };

  return {
    control,
    errors,
    handleSubmit,
    percentageSize,
    setPercentageSize,
    profissionSelected,
    setProfissionSelected,
    submitSimpleInsterestForm,
    disabledButton,
  };
};
