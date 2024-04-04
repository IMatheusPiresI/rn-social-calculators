export const formatOnlyNumbersCurrency = (value: string) => {
  const regex: RegExp = /[^\d]/g;
  const [stringCurrencyWithoutDecimal] = value.split(',');
  const onlyNumbers: string = stringCurrencyWithoutDecimal.replace(regex, '');

  return Number(onlyNumbers);
};
