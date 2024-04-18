import { IScreenViewParams } from '.';
import { LOG } from '../logEvent/constants';
import { logEvent } from '../logEvent/logEvent';

/**
 * Dispara um evento de screen_view na ferramenta de analytics.
 * @param screenName - Screen que o usuário está acessando no momento.
 */

export const logScreenView = (screenName: IScreenViewParams) => {
  logEvent(LOG.SCREEN_VIEW, {
    screen_name: screenName,
  });
};
