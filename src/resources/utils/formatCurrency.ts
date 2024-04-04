export const formatCurrency = (value: number | string) => {
  const numberValue = Number(value);
  const parts = numberValue.toFixed(2).split('.');
  const integer = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const decimal = parts[1];
  return ` ${integer},${decimal}`;
};
