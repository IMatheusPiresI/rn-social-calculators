import { act, fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { BoxSelectPercentage } from '../ index';
import { PercentageSizes } from '../constants';

describe('BoxSelectPercentage Tests', () => {
  it('should be render BoxSelectPercentage', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.MEDIUM}
          setPercentageSize={serPercentageSize}
        />
      </Wrapper>,
    );

    const boxSelectPercentage = screen.getByTestId('boxSelectPercentage');

    expect(boxSelectPercentage).toBeTruthy();
  });

  it('should be render label BoxSelectPercentage', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.MEDIUM}
          setPercentageSize={serPercentageSize}
          label="Selecionar Porcentagem"
        />
      </Wrapper>,
    );

    const boxSelectPercentageLabel = screen.getByText('Selecionar Porcentagem');

    expect(boxSelectPercentageLabel).toBeTruthy();
  });

  it('should be select correct percentage SMALL', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.SMALL}
          setPercentageSize={serPercentageSize}
          label="Selecionar Porcentagem"
        />
      </Wrapper>,
    );

    const buttonSmallPercentage = screen.queryAllByTestId(
      'buttonSelectAnimatedText',
    );

    act(() => {
      fireEvent.press(buttonSmallPercentage[0]);
    });

    expect(serPercentageSize).toHaveBeenCalledWith(PercentageSizes.SMALL);
  });

  it('should be select correct percentage MEDIUM', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.MEDIUM}
          setPercentageSize={serPercentageSize}
          label="Selecionar Porcentagem"
        />
      </Wrapper>,
    );

    const buttonSmallPercentage = screen.queryAllByTestId(
      'buttonSelectAnimatedText',
    );

    act(() => {
      fireEvent.press(buttonSmallPercentage[1]);
    });

    expect(serPercentageSize).toHaveBeenCalledWith(PercentageSizes.MEDIUM);
  });

  it('should be select correct percentage LARGE', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.LARGE}
          setPercentageSize={serPercentageSize}
          label="Selecionar Porcentagem"
        />
      </Wrapper>,
    );

    const buttonSmallPercentage = screen.queryAllByTestId(
      'buttonSelectAnimatedText',
    );

    act(() => {
      fireEvent.press(buttonSmallPercentage[2]);
    });

    expect(serPercentageSize).toHaveBeenCalledWith(PercentageSizes.LARGE);
  });
  it('should be select correct percentage EXTRA_LARGUE', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.EXTRA_LARGUE}
          setPercentageSize={serPercentageSize}
          label="Selecionar Porcentagem"
        />
      </Wrapper>,
    );

    const buttonSmallPercentage = screen.queryAllByTestId(
      'buttonSelectAnimatedText',
    );

    act(() => {
      fireEvent.press(buttonSmallPercentage[3]);
    });

    expect(serPercentageSize).toHaveBeenCalledWith(
      PercentageSizes.EXTRA_LARGUE,
    );
  });
  it('should be select correct percentage SUPER_LARGUE', () => {
    const serPercentageSize = jest.fn();

    render(
      <Wrapper>
        <BoxSelectPercentage
          percentageSize={PercentageSizes.SUPER_LARGUE}
          setPercentageSize={serPercentageSize}
          label="Selecionar Porcentagem"
        />
      </Wrapper>,
    );

    const buttonSmallPercentage = screen.queryAllByTestId(
      'buttonSelectAnimatedText',
    );

    act(() => {
      fireEvent.press(buttonSmallPercentage[4]);
    });

    expect(serPercentageSize).toHaveBeenCalledWith(
      PercentageSizes.SUPER_LARGUE,
    );
  });
});
