import { useEffect } from 'react';
import { logScreenView } from '../../logScreenView/logScreenView';
import { IScreenViewParams } from '../../logScreenView';

/**
 * Hook que dispara o evento 'screen_view' para a ferramenta de analytics.
 * @param screenName - O nome da tela.
 * @example
 * const Home = () => {
 *   useScreenView('Home');
 * }
 */

export const useScreenView = (screenName: IScreenViewParams) => {
  useEffect(() => {
    logScreenView(screenName);
  }, [screenName]);
};
