import React, { useState } from 'react';
import { Box } from '@components/UI/Box';
import { colors } from '@resources/theme/colors';
import { ChartInterestEvolution } from '@components/ChartInterestEvolution';
import { TableInterestEvolution } from '@components/TableInterestEvolution';
import { ButtonSelectAnimated } from '@components/ButtonSelectAnimated';

import { ISelectTypeRenderInterestProps, ITypeRenderInterest } from './types';

export const SelectTypeRenderInterest: React.FC<
  ISelectTypeRenderInterestProps
> = ({ dataChart, dataTable }) => {
  const [typeRenderInterest, setTypeRenderInterest] =
    useState<ITypeRenderInterest>(ITypeRenderInterest.GRAPHIC);

  const handleSelectGraphic = () => {
    if (typeRenderInterest === ITypeRenderInterest.GRAPHIC) return;
    setTypeRenderInterest(ITypeRenderInterest.GRAPHIC);
  };

  const handleSelectTable = () => {
    if (typeRenderInterest === ITypeRenderInterest.TABLE) return;
    setTypeRenderInterest(ITypeRenderInterest.TABLE);
  };

  const renderGraphicOrTable = () => {
    if (typeRenderInterest === ITypeRenderInterest.GRAPHIC) {
      return <ChartInterestEvolution dataChart={dataChart} />;
    }

    return <TableInterestEvolution dataTable={dataTable} />;
  };

  return (
    <Box flex={1}>
      <Box
        flexDirection="row"
        borderWidth={1}
        borderColor={colors.borderLight}
        borderRadius={12}
        overflow="hidden"
        height={56}
      >
        <ButtonSelectAnimated
          label="Gráfico"
          isActive={typeRenderInterest === ITypeRenderInterest.GRAPHIC}
          onPress={handleSelectGraphic}
          boxInativeColor="transparent"
          boxActiveColor="mainBackground"
          textActiveColor="textDark"
          textInativeColor="textLight"
        />
        <Box width={1} backgroundColor="mainBackground" />
        <ButtonSelectAnimated
          label="Tabela"
          isActive={typeRenderInterest === ITypeRenderInterest.TABLE}
          onPress={handleSelectTable}
          boxInativeColor="transparent"
          boxActiveColor="mainBackground"
          textActiveColor="textDark"
          textInativeColor="textLight"
        />
      </Box>
      <Box marginTop={24} flex={1}>
        {renderGraphicOrTable()}
      </Box>
    </Box>
  );
};
