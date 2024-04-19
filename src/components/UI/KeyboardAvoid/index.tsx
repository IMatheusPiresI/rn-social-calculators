import React from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import * as S from './styles';
import { IKeyboardAvoid } from './types';

export const KeyboardAvoid: React.FC<IKeyboardAvoid> = ({ children }) => (
  <S.KeyboardAvoid
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    testID="keyboardAvoid"
  >
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      testID="keyboardDismiss"
    >
      {children}
    </TouchableWithoutFeedback>
  </S.KeyboardAvoid>
);
