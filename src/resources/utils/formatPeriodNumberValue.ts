export function formatPeriodNumberValue(numero: string): number {
  let numberFormatted = numero.replace(/,/g, '.');

  // Remover múltiplos pontos seguidos
  numberFormatted = numberFormatted.replace(/\.(?=.*\.)/g, '');

  return Number(numberFormatted);
}
