import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { PeriodValueInput } from '..';
import { PeriodType } from '../constants';

describe('PeriodValueInput Tests', () => {
  const FormWrapper = () => {
    const { result } = renderHook(() =>
      useForm<{
        mock: string;
      }>({
        defaultValues: {
          mock: '',
        },
      }),
    );

    return {
      formHook: result.current,
    };
  };

  it('should be render PeriodValueInput', () => {
    const { formHook } = FormWrapper();
    render(
      <Wrapper>
        <PeriodValueInput
          error={formHook.formState.errors.mock}
          control={formHook.control}
          label="Período"
          monthlyLabel="Mes(es)"
          name="mock"
          onSelectPeriod={() => {}}
          typeSelected={PeriodType.MONTHLY}
          yearlyLabel="ano(s)"
        />
      </Wrapper>,
    );

    const periodValueInput = screen.getByTestId('periodValueInput');

    expect(periodValueInput).toBeTruthy();
  });

  it('should be press button period with correct option', () => {
    const { formHook } = FormWrapper();
    const onSelectPeriod = jest.fn();
    render(
      <Wrapper>
        <PeriodValueInput
          error={formHook.formState.errors.mock}
          control={formHook.control}
          label="Período"
          monthlyLabel="Mes(es)"
          name="mock"
          onSelectPeriod={onSelectPeriod}
          typeSelected={PeriodType.MONTHLY}
          yearlyLabel="ano(s)"
        />
      </Wrapper>,
    );

    const periodValueInputYealyButton = screen.getByTestId(
      'periodValueInputYealyButton',
    );
    const periodValueInputMonthButton = screen.getByTestId(
      'periodValueInputMonthButton',
    );

    act(() => {
      fireEvent.press(periodValueInputMonthButton);
    });

    expect(onSelectPeriod).toHaveBeenCalledWith(PeriodType.MONTHLY);

    act(() => {
      fireEvent.press(periodValueInputYealyButton);
    });

    expect(onSelectPeriod).toHaveBeenCalledWith(PeriodType.YEARLY);
  });
});
