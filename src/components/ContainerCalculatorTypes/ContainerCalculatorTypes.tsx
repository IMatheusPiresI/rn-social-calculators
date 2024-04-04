import { CardCalculatorType } from '../CardCalculatorType';
import { Box } from '../UI/Box';
import CalculatorSimpleIMG from '../../assets/images/calculator-simple.webp';
import CalculatorCompostIMG from '../../assets/images/calculator-compost.webp';
import CalculatorHouseIMG from '../../assets/images/calculator-house.jpg';
import CalculatorReserveIMG from '../../assets/images/calculator-reserve.webp';
import { useNavigation } from '@react-navigation/native';

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

  return (
    <Box alignItems="center" justifyContent="center" width="100%">
      <Box width="100%" gap={20}>
        <Box flexDirection="row" gap={20}>
          <CardCalculatorType
            title="Juros Simples"
            image={CalculatorSimpleIMG}
            onPress={handleNavigateToSimpleInterest}
          />
          <CardCalculatorType
            title="Juros Compostos"
            image={CalculatorCompostIMG}
            onPress={handleNavigateToCompoundInterest}
          />
        </Box>
        <Box flexDirection="row" gap={20}>
          <CardCalculatorType
            title={`Aluguel\nX\nFinanciar`}
            image={CalculatorHouseIMG}
          />
          <CardCalculatorType
            title={`Reserva\nde\nEmergência`}
            image={CalculatorReserveIMG}
            onPress={handleNavigateToEmergencyReserve}
          />
        </Box>
      </Box>
    </Box>
  );
};
