import { useEffect } from 'react';
import { logScreenView, IScreenViewParams } from '@analytics/index';

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
