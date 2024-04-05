import { Profissions } from './constants';

export type IProfissionMock = {
  index: number;
  profission: Profissions;
};

export type IEmergenyReserveData = {
  saveMonthly: number;
  reserveEmergencyValue: number;
  timeFinishInMonth: number;
  percentageSave: number;
};
