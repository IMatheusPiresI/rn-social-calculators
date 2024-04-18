import { IEmergenyReserveData } from '@screens/EmergencyReserve/hooks/useEmergencyReserve/types';

export type IModalEmergencyReserveProps = {
  onClose: () => void;
  isVisible: boolean;
  emergencyReserveData: IEmergenyReserveData | null;
};
