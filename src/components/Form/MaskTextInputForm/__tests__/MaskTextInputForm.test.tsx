import React from 'react';
import { render, renderHook, screen } from '@testing-library/react-native';
import { useForm } from 'react-hook-form';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { MaskTextInputForm } from '..';

describe('MaskTextInputForm Tests', () => {
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

  it('render MaskTextInputForm', () => {
    const { formHook } = FormWrapper();

    render(
      <Wrapper>
        <MaskTextInputForm
          name="test"
          label="Test Label"
          error={formHook.formState.errors.mock}
          control={formHook.control}
        />
      </Wrapper>,
    );
    const maskTextInputFormElement = screen.getByTestId('maskTextInputForm');
    expect(maskTextInputFormElement).toBeTruthy();
  });

  it('render correct label MaskTextInputForm', () => {
    const { formHook } = FormWrapper();

    render(
      <Wrapper>
        <MaskTextInputForm
          name="test"
          label="Test Label"
          error={formHook.formState.errors.mock}
          control={formHook.control}
        />
      </Wrapper>,
    );
    const maskTextInputFormElement = screen.getByText('Test Label');
    expect(maskTextInputFormElement).toBeTruthy();
  });
});
