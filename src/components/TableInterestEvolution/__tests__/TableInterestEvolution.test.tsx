import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Wrapper } from '@resources/helpers/tests/Wrapper';
import { formatCurrency } from '@resources/utils/formatCurrency';

import { TableInterestEvolution } from '..';
import { tableInterestEvolutionMock } from '../mocks/tableInterestEvolutionMock';

describe('TableInterestEvolution Tests', () => {
  it('should be render TableInterestEvolution', () => {
    render(
      <Wrapper>
        <TableInterestEvolution dataTable={tableInterestEvolutionMock} />
      </Wrapper>,
    );

    const tableInterestEvolutionList = screen.getByTestId(
      'tableInterestEvolutionList',
    );

    expect(tableInterestEvolutionList).toBeTruthy();
  });

  it('should be render header correct header info', () => {
    render(
      <Wrapper>
        <TableInterestEvolution dataTable={tableInterestEvolutionMock} />
      </Wrapper>,
    );

    const tableHeaderMonth = screen.getByText('Mês');
    const tableHeaderInterest = screen.getByText('Juros');
    const tableHeaderMonthTotalInterest = screen.getByText('Total investido');
    const tableHeaderMonthTotalReceived = screen.getByText('Total Juros');
    const tableHeaderMonthTotal = screen.getByText('Total Acumulado');

    expect(tableHeaderMonth).toBeTruthy();
    expect(tableHeaderInterest).toBeTruthy();
    expect(tableHeaderMonthTotal).toBeTruthy();
    expect(tableHeaderMonthTotalInterest).toBeTruthy();
    expect(tableHeaderMonthTotalReceived).toBeTruthy();
  });

  it('should be render header correct first month data', () => {
    render(
      <Wrapper>
        <TableInterestEvolution dataTable={tableInterestEvolutionMock} />
      </Wrapper>,
    );

    const tableHeaderMonth = screen.getByText(
      `${tableInterestEvolutionMock[0].months}`,
    );
    const tableHeaderInterest = screen.queryAllByText(
      formatCurrency(tableInterestEvolutionMock[0].monthlyInterest),
    );
    const tableHeaderMonthTotalInterest = screen.queryAllByText(
      formatCurrency(tableInterestEvolutionMock[0].totalInvested),
    );
    const tableHeaderMonthTotalReceived = screen.queryAllByText(
      formatCurrency(tableInterestEvolutionMock[0].totalInterest),
    );
    const tableHeaderMonthTotal = screen.queryAllByText(
      formatCurrency(tableInterestEvolutionMock[0].total),
    );

    expect(tableHeaderMonth).toBeTruthy();
    expect(tableHeaderInterest[1]).toBeTruthy();
    expect(tableHeaderMonthTotal[1]).toBeTruthy();
    expect(tableHeaderMonthTotalInterest[0]).toBeTruthy();
    expect(tableHeaderMonthTotalReceived[0]).toBeTruthy();
  });
});
