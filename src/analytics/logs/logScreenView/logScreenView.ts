import { LOG } from '@analytics/index';
import { logEvent } from '@analytics/index';

import { IScreenViewParams } from '.';

/**
 * Dispara um evento de screen_view na ferramenta de analytics.
 * @param screenName - Screen que o usuário está acessando no momento.
 */

export const logScreenView = (screenName: IScreenViewParams) => {
  logEvent(LOG.SCREEN_VIEW, {
    screen_name: screenName,
  });
};
