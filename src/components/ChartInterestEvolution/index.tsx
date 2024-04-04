import { CartesianChart, Line, useChartPressState } from 'victory-native';
import { Box } from '../UI/Box';
import { SharedValue } from 'react-native-reanimated';
import { Circle, useFont } from '@shopify/react-native-skia';
import inter from '../../../assets/fonts/Inter-Bold.ttf';
import { IChartInterestEvolutionProps, IDataChart } from './types';
import { colors } from '../../resources/theme/colors';
import { Typograph } from '../UI/Typograph';
import { formatCurrency } from '../../resources/utils/formatCurrency';

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={colors.chartColor}></Circle>;
}

export const ChartInterestEvolution: React.FC<IChartInterestEvolutionProps> = ({
  dataChart,
}) => {
  const font = useFont(inter, 10);
  const chartColor = colors.chartColor;
  const { state, isActive } = useChartPressState({
    x: 0,
    y: { months: 0, monthlyInterest: 0, initialValue: 0 },
  });

  const initialDomainValue = dataChart[0].initialValue;
  const lastDomainValue = dataChart[dataChart.length - 1].monthlyInterest;

  const initialDomainMonthly = 0;
  const lastDomainMonthly = dataChart.length;

  return (
    <Box height={'90%'}>
      <CartesianChart
        data={dataChart}
        xKey="months"
        axisOptions={{
          font,
          formatYLabel: (label) => `   ${formatCurrency(label)}`,
          formatXLabel: (label) => `   ${label}`,
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
            {isActive && (
              <ToolTip
                x={state.x.position}
                y={state.y.monthlyInterest.position}
              />
            )}
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.initialValue.position} />
            )}
          </>
        )}
      </CartesianChart>
    </Box>
  );
};
