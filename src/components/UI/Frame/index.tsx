import React, { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '@resources/theme/spacing';

import { Box } from '../Box';
import { FrameHeader } from '../FrameHeader';
import { KeyboardAvoid } from '../KeyboardAvoid';

import * as S from './styles';
import { IFrameProps } from './types';

export const Frame: React.FC<PropsWithChildren<IFrameProps>> = ({
  scrollable = false,
  backgroundColor = 'mainBackground',
  title,
  canGoBack,
  children,
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const Container = !scrollable ? Box : S.ScrollContainer;

  return (
    <Box backgroundColor={backgroundColor} flex={1} testID="frame">
      <KeyboardAvoid>
        <Container flex={1}>
          <Box
            flex={1}
            paddingBottom={bottom + spacing.defaultSpacing}
            paddingTop={top}
          >
            <Box marginBottom={16}>
              <FrameHeader title={title} canGoBack={canGoBack} />
            </Box>
            <Box paddingHorizontal={spacing.defaultSpacing} flex={1}>
              {children}
            </Box>
          </Box>
        </Container>
      </KeyboardAvoid>
    </Box>
  );
};
