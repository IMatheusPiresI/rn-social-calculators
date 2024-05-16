import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { ModalInterestTableChart } from '..';
import { modalInterestTableChartMock } from '../__mocks__/modalInterestTableChartMock';

describe('ModalInterestTableChart Tests', () => {
  it('should be render the correct label', () => {
    const label = 'This is my label';
    render(
      <Wrapper>
        <ModalInterestTableChart
          dataChart={modalInterestTableChartMock.dataChart}
          dataTable={modalInterestTableChartMock.dataTable}
          isVisible={true}
          label={label}
          onClose={() => {}}
        />
      </Wrapper>,
    );

    expect(screen.getByText(label)).toBeTruthy();
  });
  it('should be render the default label', () => {
    render(
      <Wrapper>
        <ModalInterestTableChart
          dataChart={modalInterestTableChartMock.dataChart}
          dataTable={modalInterestTableChartMock.dataTable}
          isVisible={true}
          onClose={() => {}}
        />
      </Wrapper>,
    );

    expect(screen.getByText('Rendimento')).toBeTruthy();
  });
});
