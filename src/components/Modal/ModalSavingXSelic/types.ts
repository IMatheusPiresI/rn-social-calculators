import { ISavingXSelicData } from '@screens/SelicXSavingAccount/hooks/useSelicXSavingAccount/types';

export type IModalSavingXSelicProps = {
  onClose: () => void;
  isVisible: boolean;
  dataModalSaving: ISavingXSelicData | null;
};
