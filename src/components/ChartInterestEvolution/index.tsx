import { CartesianChart, Line, useChartPressState } from 'victory-native';
import { Box } from '../UI/Box';
import {
  SharedValue,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { Circle, useFont } from '@shopify/react-native-skia';
import inter from '../../../assets/fonts/Inter-Bold.ttf';
import { IChartInterestEvolutionProps } from './types';
import { colors } from '../../resources/theme/colors';
import { formatCurrency } from '../../resources/utils/formatCurrency';
import { HeaderInfoChart } from './HeaderInfoChart';
import { Typograph } from '../UI/Typograph';

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={colors.chartColor}></Circle>;
}

export const ChartInterestEvolution: React.FC<IChartInterestEvolutionProps> = ({
  dataChart,
}) => {
  const font = useFont(inter, 10);
  const chartColor = colors.chartColor;
  const initialData = dataChart[0];
  const { state } = useChartPressState({
    x: 0,
    y: {
      months: 0,
      monthlyInterest: initialData.initialValue,
      initialValue: initialData.initialValue,
    },
  });

  const initialDomainValue = dataChart[0].initialValue;
  const lastDomainValue = dataChart[dataChart.length - 1].monthlyInterest;

  const initialDomainMonthly = 0;
  const lastDomainMonthly = dataChart.length;

  return (
    <Box flex={1}>
      <Box marginBottom={12}>
        <HeaderInfoChart
          accumulatedValue={state.y.monthlyInterest.value}
          interestedValue={state.x.value}
        />
      </Box>
      <CartesianChart
        data={dataChart}
        xKey="months"
        axisOptions={{
          font,
          formatYLabel: (label) => `R$${formatCurrency(label)}`,
          formatXLabel: (label) => `${label}`,
          labelColor: chartColor,
          labelOffset: {
            x: 10,
            y: 10,
          },
          lineColor: chartColor,
        }}
        yKeys={['monthlyInterest', 'initialValue']}
        domain={{
          x: [initialDomainMonthly, lastDomainMonthly],
          y: [initialDomainValue * 0.98, lastDomainValue * 1.02],
        }}
        chartPressState={state}
      >
        {({ points }) => (
          <>
            <Line
              points={points.monthlyInterest}
              color={chartColor}
              strokeWidth={3}
              animate={{
                type: 'timing',
                duration: 400,
              }}
            />
            <Line
              points={points.initialValue}
              color={chartColor}
              strokeWidth={3}
            />
            <ToolTip
              x={state.x.position}
              y={state.y.monthlyInterest.position}
            />
          </>
        )}
      </CartesianChart>
      <Box marginTop={8}>
        <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
          Precione o gráfico e arraste o dedo para ver mensalmente o rendimento.
        </Typograph>
      </Box>
    </Box>
  );
};
