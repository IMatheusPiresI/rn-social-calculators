import { useEffect } from 'react';
import { logScreenView } from '../logScreenView/logScreenView';

/**
 * Hook que dispara o evento 'screen_view' para a ferramenta de analytics.
 * @param screenName - O nome da tela.
 * @example
 * const Home = () => {
 *   useScreenView('Home');
 * }
 */

export const useScreenView = (
  screenName: keyof ReactNavigation.RootParamList,
) => {
  useEffect(() => {
    logScreenView(screenName);
  }, [screenName]);
};
