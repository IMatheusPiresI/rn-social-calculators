import React from 'react';
import { Box } from '@components/UI/Box';

import { CardItemTable } from './_components/CardItemTable';
import { HeaderTable } from './_components/HeaderTable';
import * as S from './styles';
import { ITableInterestEvolutionProps } from './types';

export const TableInterestEvolution: React.FC<ITableInterestEvolutionProps> = ({
  dataTable,
}) => (
  <Box>
    <S.TableList
      data={dataTable}
      bounces={false}
      ListHeaderComponent={HeaderTable}
      testID="tableInterestEvolutionList"
      renderItem={({ item, index }) => (
        <CardItemTable item={item} key={index} />
      )}
    />
  </Box>
);
