import React, { useState } from 'react';
import { ButtonSelectAnimated } from '../ButtonSelectAnimated';
import { Box } from '../UI/Box';
import { colors } from '../../resources/theme/colors';
import { PercentageSizes } from './constants';
import { IBoxSelectPercentage } from './types';
import { Typograph } from '../UI/Typograph';

export const BoxSelectPercentage = ({
  label,
  percentageSize,
  setPercentageSize,
}: IBoxSelectPercentage) => {
  const handleSelectPercentageSize = (percentageSize: PercentageSizes) => {
    setPercentageSize(percentageSize);
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
          label="5%"
          textActiveColor="textLight"
          textInativeColor="primary"
          onPress={() => handleSelectPercentageSize(PercentageSizes.SMALL)}
          isActive={percentageSize === PercentageSizes.SMALL}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label="10%"
          textActiveColor="textLight"
          borderHorizontal
          textInativeColor="primary"
          onPress={() => handleSelectPercentageSize(PercentageSizes.MEDIUM)}
          isActive={percentageSize === PercentageSizes.MEDIUM}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label="15%"
          textActiveColor="textLight"
          textInativeColor="primary"
          onPress={() => handleSelectPercentageSize(PercentageSizes.LARGE)}
          isActive={percentageSize === PercentageSizes.LARGE}
        />
        <ButtonSelectAnimated
          boxActiveColor="primary"
          boxInativeColor="transparent"
          label="20%"
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
          label="25%"
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
