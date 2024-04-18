import React from 'react';
import { Box } from '@components/UI/Box';
import { colors } from '@resources/theme/colors';
import { Typograph } from '@components/UI/Typograph';

import { ButtonSelectAnimated } from '../ButtonSelectAnimated';

import { PercentageSizes } from './constants';
import { IBoxSelectPercentage } from './types';

export const BoxSelectPercentage = ({
  label,
  percentageSize,
  setPercentageSize,
}: IBoxSelectPercentage) => {
  const handleSelectPercentageSize = (size: PercentageSizes) => {
    setPercentageSize(size);
  };

  return (
    <Box>
      {label && (
        <Typograph color="primary" font="INTER_BOLD" fontSize={14}>
          {label}
        </Typograph>
      )}
      <Box
        flexDirection="row"
        height={46}
        borderRadius={12}
        marginTop={8}
        overflow="hidden"
        borderWidth={1}
        borderColor={colors.primary}
      >
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label={`${PercentageSizes.SMALL}%`}
          textActiveColor="textLight"
          textInativeColor="primary"
          onPress={() => handleSelectPercentageSize(PercentageSizes.SMALL)}
          isActive={percentageSize === PercentageSizes.SMALL}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label={`${PercentageSizes.MEDIUM}%`}
          textActiveColor="textLight"
          borderHorizontal
          textInativeColor="primary"
          onPress={() => handleSelectPercentageSize(PercentageSizes.MEDIUM)}
          isActive={percentageSize === PercentageSizes.MEDIUM}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label={`${PercentageSizes.LARGE}%`}
          textActiveColor="textLight"
          textInativeColor="primary"
          onPress={() => handleSelectPercentageSize(PercentageSizes.LARGE)}
          isActive={percentageSize === PercentageSizes.LARGE}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label={`${PercentageSizes.EXTRA_LARGUE}%`}
          textActiveColor="textLight"
          textInativeColor="primary"
          borderHorizontal
          onPress={() =>
            handleSelectPercentageSize(PercentageSizes.EXTRA_LARGUE)
          }
          isActive={percentageSize === PercentageSizes.EXTRA_LARGUE}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label={`${PercentageSizes.SUPER_LARGUE}%`}
          textActiveColor="textLight"
          textInativeColor="primary"
          onPress={() =>
            handleSelectPercentageSize(PercentageSizes.SUPER_LARGUE)
          }
          isActive={percentageSize === PercentageSizes.SUPER_LARGUE}
        />
      </Box>
    </Box>
  );
};
