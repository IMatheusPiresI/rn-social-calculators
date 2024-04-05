import { IProfissionMock } from './types';

export const enum Profissions {
  CLT = 'CLT',
  PUBLIC_AGENT = 'PUBLIC_AGENT',
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  UNINFORMED = 'UNINFORMED',
}

export const profissionEmergencyReserveMonthlyTime: Record<
  Profissions,
  number
> = {
  UNINFORMED: 0,
  PUBLIC_AGENT: 3,
  CLT: 6,
  SELF_EMPLOYED: 12,
};

export const profissions: Record<Profissions, string> = {
  UNINFORMED: 'Não Informado',
  CLT: 'CLT',
  PUBLIC_AGENT: 'Funcionário Público',
  SELF_EMPLOYED: 'MEI/Autônomo/Empreendedor',
};

export const profissionsMock: IProfissionMock[] = [
  {
    index: 0,
    profission: Profissions.CLT,
  },
  {
    index: 1,
    profission: Profissions.PUBLIC_AGENT,
  },
  {
    index: 2,
    profission: Profissions.SELF_EMPLOYED,
  },
];
