import React from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import * as S from './styles';
import { IKeyboardAvoid } from './types';

export const KeyboardAvoid: React.FC<IKeyboardAvoid> = ({ children }) => {
  return (
    <S.KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </S.KeyboardAvoid>
  );
};
