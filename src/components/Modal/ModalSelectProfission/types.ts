import { Profissions } from './constants';

export type IModalSelectProfissionProps = {
  onSelectProfission: (profission: Profissions) => void;
  onClose: () => void;
  isVisible: boolean;
};
