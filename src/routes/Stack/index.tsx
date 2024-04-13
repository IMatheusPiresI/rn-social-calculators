import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../../screens/Home';
import SimpleInterest from '../../screens/SimpleInterest';
import CompoundInterest from '../../screens/CompoundInterest';
import EmergencyReserve from '../../screens/EmergencyReserve';
import SelicXSavingAccount from '../../screens/SelicXSavingAccount';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SimpleInterest" component={SimpleInterest} />
      <Stack.Screen name="CompoundInterest" component={CompoundInterest} />
      <Stack.Screen name="EmergencyReserve" component={EmergencyReserve} />
      <Stack.Screen
        name="SelicXSavingAccount"
        component={SelicXSavingAccount}
      />
    </Stack.Navigator>
  );
};
