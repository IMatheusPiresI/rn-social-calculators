import { FirebaseAnalytics } from '../instance';
import { LOG } from './constants';
import { EventParams } from './types';

/**
 * Dispara um evento na ferramenta de analytics.
 * @param eventName - O nome do evento.
 * @param eventParams - Os parâmetros do evento.
 */

export const logEvent = (eventName: LOG, eventParams: EventParams) => {
  FirebaseAnalytics.logEvent(eventName, eventParams);
};
