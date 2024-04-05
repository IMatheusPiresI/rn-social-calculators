export const enum Profissions {
  CLT = 'CLT',
  PUBLIC_AGENT = 'PUBLIC_AGENT',
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  UNINFORMED = 'UNINFORMED',
}

export const profissions = {
  UNINFORMED: 'Não Informado',
  CLT: 'CLT',
  PUBLIC_AGENT: 'Funcionário Público',
  SELF_EMPLOYED: 'MEI/Autônomo/Empreendedor',
};

export const profissionsMock = [
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
