import React from 'react';

import { PercentageSizes } from './constants';

export type IBoxSelectPercentage = {
  label?: string;
  setPercentageSize: React.Dispatch<React.SetStateAction<PercentageSizes>>;
  percentageSize: PercentageSizes;
};
