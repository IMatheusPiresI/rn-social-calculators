import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Wrapper } from '@resources/helpers/tests/Wrapper';
import { tableInterestEvolutionMock } from '@components/TableInterestEvolution/mocks/tableInterestEvolutionMock';
import { formatCurrency } from '@resources/utils/formatCurrency';

import { CardItemTable } from '..';

describe('CardItemTable Tests', () => {
  it('should be render CardItemTable', () => {
    render(
      <Wrapper>
        <CardItemTable item={tableInterestEvolutionMock[0]} />
      </Wrapper>,
    );

    const cardItemTable = screen.getByTestId('cardItemTable');

    expect(cardItemTable).toBeTruthy();
  });

  it('should be render header correct month data', () => {
    render(
      <Wrapper>
        <CardItemTable item={tableInterestEvolutionMock[0]} />
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
