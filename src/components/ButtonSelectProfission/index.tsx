import React, { useState } from 'react';
import { Typograph } from '@components/UI/Typograph';
import { Box } from '@components/UI/Box';
import {
  Profissions,
  profissions,
} from '@screens/EmergencyReserve/hooks/useEmergencyReserve/constants';

import { ModalSelectProfission } from '../Modal/ModalSelectProfission';

import { IButtonSelectProfission } from './types';
import * as S from './styles';

export const ButtonSelectProfission = ({
  profissionSelected,
  label,
  setProfissionSelected,
}: IButtonSelectProfission) => {
  const [showModalSelectProfission, setShowModalSelectProfission] =
    useState<boolean>(false);

  const openModalSelectProfission = () => {
    setShowModalSelectProfission(true);
  };

  const closeModalSelectProfission = () => {
    setShowModalSelectProfission(false);
  };

  const handleSelectProfission = (profission: Profissions) => {
    setProfissionSelected(profission);
    closeModalSelectProfission();
  };
  return (
    <Box>
      <Box marginBottom={6}>
        <Typograph color="primary" font="INTER_BOLD" fontSize={14}>
          {label}
        </Typograph>
      </Box>
      <S.ButtonOpacity
        onPress={openModalSelectProfission}
        testID="buttonSelectProfission"
      >
        <Typograph color="primary" font="INTER_MEDIUM" fontSize={14}>
          {profissions[profissionSelected]}
        </Typograph>
      </S.ButtonOpacity>
      <ModalSelectProfission
        isVisible={showModalSelectProfission}
        onClose={closeModalSelectProfission}
        onSelectProfission={handleSelectProfission}
      />
    </Box>
  );
};
