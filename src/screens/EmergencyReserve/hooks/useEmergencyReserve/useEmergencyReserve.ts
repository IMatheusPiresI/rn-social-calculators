import { useMemo, useState } from 'react';
import { PercentageSizes } from '../../../../components/BoxSelectPercentage/constants';
import {
  IFormEmergencyReserveValues,
  useEmergencyReserveForm,
} from '../useEmergencyReserveForm';
import { formatOnlyNumbersCurrency } from '../../../../resources/utils/formatOnlyNumbersCurrency';
import {
  Profissions,
  profissionEmergencyReserveMonthlyTime,
} from './constants';
import { IEmergenyReserveData } from './types';

export const useEmergencyReserve = () => {
  const { control, errors, isValid, handleSubmit } = useEmergencyReserveForm();
  const [percentageSize, setPercentageSize] = useState<PercentageSizes>(
    PercentageSizes.SMALL,
  );
  const [profissionSelected, setProfissionSelected] = useState<Profissions>(
    Profissions.UNINFORMED,
  );
  const [emergencyReserveData, setEmergencyReserveData] =
    useState<IEmergenyReserveData | null>(null);

  const [showModalEmergencyReserve, setShowModalEmergencyReserve] =
    useState<boolean>(false);

  const openModalEmergencyReserve = () => {
    setShowModalEmergencyReserve(true);
  };

  const closeModalEmergencyReserve = () => {
    setShowModalEmergencyReserve(false);
  };

  const disabledButton = useMemo(() => {
    if (!isValid || profissionSelected === Profissions.UNINFORMED) return true;

    return false;
  }, [isValid, profissionSelected]);

  const submitSimpleInsterestForm = (values: IFormEmergencyReserveValues) => {
    const fixedCost = formatOnlyNumbersCurrency(values.fixedCost);
    const monthlySalary = formatOnlyNumbersCurrency(values.monthlySalary);
    const profissionMonthlyTime =
      profissionEmergencyReserveMonthlyTime[profissionSelected];

    const saveMonthly = (percentageSize / 100) * monthlySalary;
    const reserveEmergencyValue = fixedCost * profissionMonthlyTime;
    const timeFinishInMonth = reserveEmergencyValue / saveMonthly;

    setEmergencyReserveData({
      reserveEmergencyValue,
      saveMonthly,
      timeFinishInMonth,
      percentageSave: percentageSize,
    });
    openModalEmergencyReserve();
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
    closeModalEmergencyReserve,
    disabledButton,
    emergencyReserveData,
    showModalEmergencyReserve,
  };
};
