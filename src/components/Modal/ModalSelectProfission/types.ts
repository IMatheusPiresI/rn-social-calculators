import { Profissions } from '../../../screens/EmergencyReserve/hooks/useEmergencyReserve/constants';

export type IModalSelectProfissionProps = {
  onSelectProfission: (profission: Profissions) => void;
  onClose: () => void;
  isVisible: boolean;
};
