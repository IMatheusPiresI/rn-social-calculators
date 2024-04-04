import React, { useCallback, useEffect } from 'react';

import * as S from './styles';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { IButtonTypeRenderInterestProps } from './types';
import { colors } from '../../resources/theme/colors';

export const ButtonSelectAnimated: React.FC<IButtonTypeRenderInterestProps> = ({
  isActive,
  label,
  boxActiveColor,
  boxInativeColor,
  textActiveColor,
  textInativeColor,
  borderHorizontal,
  borderColor,
  ...rest
}) => {
  const animationSelect = useSharedValue(0);

  const rAnimatedBoxSelect = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animationSelect.value,
      [0, 1],
      [colors[boxInativeColor], colors[boxActiveColor]],
    ),
  }));

  const rAnimatedTextSelect = useAnimatedStyle(() => ({
    color: interpolateColor(
      animationSelect.value,
      [0, 1],
      [colors[textInativeColor], colors[textActiveColor]],
    ),
  }));

  const changeAnimationOnActive = useCallback(() => {
    if (isActive) {
      animationSelect.value = withTiming(1, { duration: 400 });
      return;
    }

    animationSelect.value = withTiming(0, { duration: 400 });
  }, [isActive]);

  useEffect(() => {
    changeAnimationOnActive();
  }, [changeAnimationOnActive]);

  return (
    <S.ButtonOpacity
      {...rest}
      borderColor={borderColor}
      borderHorizontal={borderHorizontal}
    >
      <S.AnimatedBox style={rAnimatedBoxSelect}>
        <S.AnimatedText style={rAnimatedTextSelect}>{label}</S.AnimatedText>
      </S.AnimatedBox>
    </S.ButtonOpacity>
  );
};