import { FirebaseAnalytics } from '../instance';
import { LOG } from '../logEvent/constants';
import { logEvent } from '../logEvent/logEvent';

/**
 * Dispara um evento na ferramenta de analytics.
 * @param eventName - O nome do evento.
 * @param eventParams - Os parâmetros do evento.
 */

export const logScreenView = (
  screenName: keyof ReactNavigation.RootParamList,
) => {
  logEvent(LOG.SCREEN_VIEW, {
    screen_name: screenName,
  });
};
