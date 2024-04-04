import React from 'react';
import { Box } from '../UI/Box';
import { CardItemTable } from './CardItemTable';
import { HeaderTable } from './HeaderTable';
import * as S from './styles';
import { ITableInterestEvolutionProps } from './types';

export const TableInterestEvolution: React.FC<ITableInterestEvolutionProps> = ({
  dataTable,
}) => {
  return (
    <Box>
      <S.TableList
        data={dataTable}
        ListHeaderComponent={() => <HeaderTable />}
        renderItem={({ item, index }) => (
          <CardItemTable index={index} item={item} key={index} />
        )}
      />
    </Box>
  );
};
