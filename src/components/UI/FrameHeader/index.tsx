import { colors } from '../../../resources/theme/colors';
import { Box } from '../Box';
import { Typograph } from '../Typograph';
import LogoIMG from '../../../assets/images/logo.jpg';
import * as S from './styles';
import { IFrameHeaderProps } from './types';
import { ArrowCircleLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export const FrameHeader: React.FC<IFrameHeaderProps> = ({
  title,
  canGoBack,
}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Box
      flexDirection="row"
      borderBottomWidth={2}
      borderBottomColor={colors.primary}
      paddingBottom={12}
      paddingHorizontal={20}
    >
      <Box flexDirection="row" gap={12} alignItems="center">
        {canGoBack ? (
          <S.ButtonGoBack onPress={handleGoBack}>
            <ArrowCircleLeft size={35} color={colors.primary} />
          </S.ButtonGoBack>
        ) : (
          <S.ImageLogo source={LogoIMG} resizeMode="cover" />
        )}
        <Typograph
          fontSize={20}
          font="INTER_BOLD"
          color="primary"
          numberOfLines={1}
        >
          {title ?? 'MathCalc'}
        </Typograph>
      </Box>
    </Box>
  );
};
