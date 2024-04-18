import { FirebaseAnalytics } from '../instance';

import { EventParams } from './types';

import { LOG } from '.';

/**
 * Dispara um evento na ferramenta de analytics.
 * @param eventName - O nome do evento.
 * @param eventParams - Os parâmetros do evento.
 */

export const logEvent = (eventName: LOG, eventParams?: EventParams) => {
  FirebaseAnalytics.logEvent(eventName, eventParams);
};
