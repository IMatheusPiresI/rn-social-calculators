import React from 'react';
import { Frame } from '@components/UI/Frame';
import { Typograph } from '@components/UI/Typograph';
import { Box } from '@components/UI/Box';
import { ContainerCalculatorTypes } from 'components/ContainerCalculatorTypes';
import { useScreenView } from '@analytics/index';

const Home: React.FC = () => {
  useScreenView('Home');

  return (
    <Frame>
      <Typograph font="INTER_BOLD" fontSize={20} color="primary">
        CALCULADORAS E SIMULADORES
      </Typograph>

      <Box marginVertical={12}>
        <Typograph font="INTER_MEDIUM" fontSize={12} color="primary">
          Transforme suas decisões financeiras com facilidade. Calcule juros,
          compare alugar e financiar, e construa sua reserva de emergência em
          segundos. Seu guia financeiro completo em um só lugar.
        </Typograph>
      </Box>
      <Box marginTop={50}>
        <ContainerCalculatorTypes />
      </Box>
    </Frame>
  );
};

export default Home;
