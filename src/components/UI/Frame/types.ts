import { IColors } from '../../../resources/theme/colors';

export type IFrameProps = {
  scrollable?: boolean;
  backgroundColor?: IColors;
  title?: string;
  canGoBack?: boolean;
};

export type IScrollContentProps = {
  flex?: number;
  backgroundColor: IColors;
  paddingHorizontal: number;
  paddingVertical: number;
};
