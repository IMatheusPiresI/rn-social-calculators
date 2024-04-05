import { Profissions } from '../../screens/EmergencyReserve/hooks/useEmergencyReserve/constants';

export type IButtonSelectProfission = {
  profissionSelected: Profissions;
  label: string;
  setProfissionSelected: React.Dispatch<React.SetStateAction<Profissions>>;
};
