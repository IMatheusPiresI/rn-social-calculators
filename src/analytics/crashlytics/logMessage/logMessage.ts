import { FirebaseCrashlytics } from '../instance';

/**
 * Registra uma mensagem na ferramenta de crash reporting.
 *
 * @param {string} message - A mensagem a ser registrada.
 */

export const logMessage = (message: string) => {
  FirebaseCrashlytics.log(message);
};
