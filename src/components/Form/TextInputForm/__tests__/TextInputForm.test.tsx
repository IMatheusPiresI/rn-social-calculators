import { render, renderHook, screen } from '@testing-library/react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper } from '@resources/helpers/tests/Wrapper';
import { IFormSimpleInterestValues } from 'screens/SimpleInterest/hooks/useSimpleInterestForm';

import { TextInputForm } from '..';

describe('PeriodValueInput Tests', () => {
  const FormWrapper = () => {
    const { result } = renderHook(() =>
      useForm<IFormSimpleInterestValues>({
        defaultValues: {
          initialValue: '',
          interestRatePeriodValue: '',
          timePeriodValue: '',
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
        <TextInputForm
          error={formHook.formState.errors.initialValue}
          control={formHook.control}
          label="Período"
          name="initialValue"
        />
      </Wrapper>,
    );

    const periodValueInput = screen.getByText('Período');

    expect(periodValueInput).toBeTruthy();
  });
});
