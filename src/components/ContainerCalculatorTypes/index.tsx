import React from 'react';
import { Box } from '@components/UI/Box';
import CalculatorSimpleIMG from '@assets/images/calculator-simple.webp';
import CalculatorCompostIMG from '@assets/images/calculator-compost.webp';
import CalculatorHouseIMG from '@assets/images/calculator-house.jpg';
import CalculatorReserveIMG from '@assets/images/calculator-reserve.webp';
import { useNavigation } from '@react-navigation/native';

import { CardCalculatorType } from '../CardCalculatorType';

export const ContainerCalculatorTypes: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToSimpleInterest = () => {
    navigation.navigate('SimpleInterest');
  };

  const handleNavigateToCompoundInterest = () => {
    navigation.navigate('CompoundInterest');
  };

  const handleNavigateToEmergencyReserve = () => {
    navigation.navigate('EmergencyReserve');
  };

  const handleNavigateToSelicXSavingAccount = () => {
    navigation.navigate('SelicXSavingAccount');
  };

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      width="100%"
      testID="containerCalculatorTypes"
    >
      <Box width="100%" gap={20}>
        <Box flexDirection="row" gap={20}>
          <CardCalculatorType
            title="Juros Simples"
            image={CalculatorSimpleIMG}
            onPress={handleNavigateToSimpleInterest}
            testID="buttonSimpleInterest"
          />
          <CardCalculatorType
            title="Juros Compostos"
            image={CalculatorCompostIMG}
            onPress={handleNavigateToCompoundInterest}
            testID="buttonCompoundInterest"
          />
        </Box>
        <Box flexDirection="row" gap={20}>
          <CardCalculatorType
            title={`Poupança\nx\nSelic`}
            image={CalculatorHouseIMG}
            onPress={handleNavigateToSelicXSavingAccount}
            testID="buttonSelicXSavingAccount"
          />
          <CardCalculatorType
            title={`Reserva\nde\nEmergência`}
            image={CalculatorReserveIMG}
            onPress={handleNavigateToEmergencyReserve}
            testID="buttonEmergencyReserve"
          />
        </Box>
      </Box>
    </Box>
  );
};
