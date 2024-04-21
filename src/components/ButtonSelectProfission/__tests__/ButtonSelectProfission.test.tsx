import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import {
  Profissions,
  profissions,
} from '@screens/EmergencyReserve/hooks/useEmergencyReserve/constants';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { ButtonSelectProfission } from '..';

describe('ButtonSelectProfission', () => {
  it('should be render ButtonSelectProfission', () => {
    const setProfissionSelected = jest.fn();

    const labelButton = 'Selecione sua profissão';
    render(
      <Wrapper>
        <ButtonSelectProfission
          label={labelButton}
          profissionSelected={Profissions.CLT}
          setProfissionSelected={setProfissionSelected}
        />
      </Wrapper>,
    );

    const label = screen.getByText(labelButton);

    expect(label).toBeTruthy();
  });

  it('should be render ButtonSelectProfission the correct profission selected', () => {
    const setProfissionSelected = jest.fn();

    const labelButton = 'Selecione sua profissão';
    render(
      <Wrapper>
        <ButtonSelectProfission
          label={labelButton}
          profissionSelected={Profissions.CLT}
          setProfissionSelected={setProfissionSelected}
        />
      </Wrapper>,
    );

    const profission = screen.getByText(profissions[Profissions.CLT]);

    expect(profission).toBeTruthy();
  });

  it('should be open ModalSelectProfission', () => {
    const setProfissionSelected = jest.fn();

    const labelButton = 'Selecione sua profissão';
    render(
      <Wrapper>
        <ButtonSelectProfission
          label={labelButton}
          profissionSelected={Profissions.UNINFORMED}
          setProfissionSelected={setProfissionSelected}
        />
      </Wrapper>,
    );

    const buttonSelectProfission = screen.getByTestId('buttonSelectProfission');

    act(() => {
      fireEvent.press(buttonSelectProfission);
    });

    const modalSelectProfission = screen.findByTestId('modalSelectProfission');
    waitFor(() => {
      expect(modalSelectProfission).toBeTruthy();
    });
  });

  it('should be open ModalSelectProfission select Profission and close ModalSelectProfission', () => {
    const setProfissionSelected = jest.fn();

    const labelButton = 'Selecione sua profissão';
    render(
      <Wrapper>
        <ButtonSelectProfission
          label={labelButton}
          profissionSelected={Profissions.UNINFORMED}
          setProfissionSelected={setProfissionSelected}
        />
      </Wrapper>,
    );

    const buttonSelectProfission = screen.getByTestId('buttonSelectProfission');

    act(() => {
      fireEvent.press(buttonSelectProfission);
    });

    const buttonProfissionCLT = screen.getByText(profissions[Profissions.CLT]);

    act(() => {
      fireEvent.press(buttonProfissionCLT);
    });
    const modalSelectProfission = screen.queryByTestId('modalSelectProfission');

    expect(modalSelectProfission).toBeNull();
  });
});
