import { Profissions } from '../Modal/ModalSelectProfission/constants';

export type IButtonSelectProfission = {
  profissionSelected: Profissions;
  label: string;
  setProfissionSelected: React.Dispatch<React.SetStateAction<Profissions>>;
};
