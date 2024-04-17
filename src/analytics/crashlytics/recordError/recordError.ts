import { FirebaseCrashlytics } from '../instance';

/**
 * Registra um erro não fatal na ferramenta de crash reporting.
 *
 * @param {Error} error - O erro a ser registrado.
 */

export const recordError = (error: unknown) => {
  if (error instanceof Error) {
    FirebaseCrashlytics.recordError(error, 'non-fatal-error');
    return;
  }
};
