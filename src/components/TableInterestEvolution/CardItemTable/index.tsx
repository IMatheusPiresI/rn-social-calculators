import React from 'react';
import { colors } from '../../../resources/theme/colors';
import { Box } from '../../UI/Box';
import { Typograph } from '../../UI/Typograph';
import { ICardItemTableProps } from './types';
import { formatCurrency } from '../../../resources/utils/formatCurrency';

export const CardItemTable: React.FC<ICardItemTableProps> = ({
  item,
  index,
}) => {
  return (
    <Box flexDirection="row" borderWidth={1} borderColor={colors.tableColor}>
      <Box
        width={50}
        borderRightWidth={1}
        borderRightColor={colors.tableColor}
        paddingVertical={12}
        alignItems="center"
        justifyContent="center"
      >
        <Typograph alignment="center" color="textLight" font="INTER_MEDIUM">
          {item.months}
        </Typograph>
      </Box>
      <Box
        flex={1}
        borderRightWidth={1}
        borderRightColor={colors.tableColor}
        paddingVertical={12}
        alignItems="center"
        justifyContent="center"
      >
        <Typograph alignment="center" color="textLight" font="INTER_MEDIUM">
          {formatCurrency(item.monthlyInterest)}
        </Typograph>
      </Box>
      <Box
        flex={1}
        borderRightWidth={1}
        borderRightColor={colors.tableColor}
        paddingVertical={12}
        alignItems="center"
        justifyContent="center"
      >
        <Typograph alignment="center" color="textLight" font="INTER_MEDIUM">
          {formatCurrency(item.totalInvested)}
        </Typograph>
      </Box>
      <Box
        flex={1}
        borderRightWidth={1}
        borderRightColor={colors.tableColor}
        paddingVertical={12}
        alignItems="center"
        justifyContent="center"
      >
        <Typograph alignment="center" color="textLight" font="INTER_MEDIUM">
          {formatCurrency(item.totalInterest)}
        </Typograph>
      </Box>
      <Box
        flex={1}
        paddingVertical={12}
        alignItems="center"
        justifyContent="center"
      >
        <Typograph alignment="center" color="textLight" font="INTER_MEDIUM">
          {formatCurrency(item.total)}
        </Typograph>
      </Box>
    </Box>
  );
};
