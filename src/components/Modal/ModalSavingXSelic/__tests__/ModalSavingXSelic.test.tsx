import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { ModalSavingXSelic } from '..';
import { modalSavingXSelicMock } from '../mocks/modalSavingXSelicMock';

describe('ModalSavingXSelic Tests', () => {
  it('should be render ModalSavingXSelic info period YEARLY', () => {
    render(
      <Wrapper>
        <ModalSavingXSelic
          dataModalSaving={modalSavingXSelicMock.multiplePeriodTime.year}
          isVisible
          onClose={() => {}}
        />
      </Wrapper>,
    );

    const modalSavingXSelic = screen.getByTestId('modalSavingXSelic');

    const periodTimeString = screen.getByText(
      `${modalSavingXSelicMock.multiplePeriodTime.year.periodTime} anos`,
    );

    expect(modalSavingXSelic).toBeTruthy();
    expect(periodTimeString).toBeTruthy();
  });
  it('should be render ModalSavingXSelic info period MONTHLY', () => {
    render(
      <Wrapper>
        <ModalSavingXSelic
          dataModalSaving={modalSavingXSelicMock.multiplePeriodTime.month}
          isVisible
          onClose={() => {}}
        />
      </Wrapper>,
    );

    const modalSavingXSelic = screen.getByTestId('modalSavingXSelic');

    const periodTimeString = screen.getByText(
      `${modalSavingXSelicMock.multiplePeriodTime.month.periodTime} meses`,
    );

    expect(modalSavingXSelic).toBeTruthy();
    expect(periodTimeString).toBeTruthy();
  });

  it('should be render ModalTableChart with Saving data onPress button Saving', () => {
    render(
      <Wrapper>
        <ModalSavingXSelic
          dataModalSaving={modalSavingXSelicMock.multiplePeriodTime.year}
          isVisible
          onClose={() => {}}
        />
      </Wrapper>,
    );

    const modalSavingXSelicButtonSaving = screen.getByTestId(
      'modalSavingXSelicButtonSaving',
    );

    act(() => {
      fireEvent.press(modalSavingXSelicButtonSaving);
    });

    const modalInterestTableChart = screen.getByTestId(
      'modalInterestTableChart',
    );
    expect(modalInterestTableChart).toBeTruthy();

    const modalInterestTableChartCloseButton = screen.getByTestId(
      'modalInterestTableChartCloseButton',
    );

    act(() => {
      fireEvent.press(modalInterestTableChartCloseButton);
    });

    waitFor(() => {
      expect(modalInterestTableChart).toBeFalsy();
    });
  });

  it('should be render ModalTableChart with Selic data onPress button Selic', () => {
    const onClose = jest.fn();
    render(
      <Wrapper>
        <ModalSavingXSelic
          dataModalSaving={modalSavingXSelicMock.multiplePeriodTime.year}
          isVisible
          onClose={onClose}
        />
      </Wrapper>,
    );

    const modalSavingXSelicButtonSelic = screen.getByTestId(
      'modalSavingXSelicButtonSelic',
    );

    act(() => {
      fireEvent.press(modalSavingXSelicButtonSelic);
    });

    const modalInterestTableChart = screen.getByTestId(
      'modalInterestTableChart',
    );

    expect(modalInterestTableChart).toBeTruthy();

    const modalInterestTableChartCloseButton = screen.getByTestId(
      'modalInterestTableChartCloseButton',
    );

    act(() => {
      fireEvent.press(modalInterestTableChartCloseButton);
    });

    waitFor(() => {
      expect(modalInterestTableChart).toBeFalsy();
    });
  });

  it('should be render ModalTableChart with singlePeriodTime text month', () => {
    const onClose = jest.fn();
    render(
      <Wrapper>
        <ModalSavingXSelic
          dataModalSaving={modalSavingXSelicMock.singlePeriodTime.month}
          isVisible
          onClose={onClose}
        />
      </Wrapper>,
    );

    const periodTimeString = screen.getByText(
      `${modalSavingXSelicMock.singlePeriodTime.month.periodTime} mês`,
    );

    expect(periodTimeString).toBeTruthy();
  });

  it('should be render ModalTableChart with singlePeriodTime text year', () => {
    const onClose = jest.fn();
    render(
      <Wrapper>
        <ModalSavingXSelic
          dataModalSaving={modalSavingXSelicMock.singlePeriodTime.year}
          isVisible
          onClose={onClose}
        />
      </Wrapper>,
    );

    const periodTimeString = screen.getByText(
      `${modalSavingXSelicMock.singlePeriodTime.month.periodTime} ano`,
    );

    expect(periodTimeString).toBeTruthy();
  });
});
