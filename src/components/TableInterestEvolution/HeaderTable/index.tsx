import React from 'react';
import { colors } from '@resources/theme/colors';
import { Box } from '@components/UI/Box';
import { Typograph } from '@components/UI/Typograph';

export const HeaderTable: React.FC = () => (
  <Box flexDirection="row" borderWidth={1} borderColor={colors.tableColor}>
    <Box
      width={50}
      borderRightWidth={1}
      borderRightColor={colors.tableColor}
      paddingVertical={12}
      alignItems="center"
      justifyContent="center"
    >
      <Typograph alignment="center" color="textLight" font="INTER_BOLD">
        Mês
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
      <Typograph alignment="center" color="textLight" font="INTER_BOLD">
        Juros
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
      <Typograph alignment="center" color="textLight" font="INTER_BOLD">
        Total investido
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
      <Typograph alignment="center" color="textLight" font="INTER_BOLD">
        Total Juros
      </Typograph>
    </Box>
    <Box
      flex={1}
      paddingVertical={12}
      alignItems="center"
      justifyContent="center"
    >
      <Typograph alignment="center" color="textLight" font="INTER_BOLD">
        Total Acumulado
      </Typograph>
    </Box>
  </Box>
);
