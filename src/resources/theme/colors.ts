const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3',
  transparent: 'transparent',
  blue_200: 'rgb(4, 76, 137)',
  transparent_blue_200: 'rgba(4, 76, 137, 0.8)',
  gray: '#CCCC',
  gray_600: '#a29393',
  error: '#f72525',
};

export const colors = {
  mainBackground: palette.white,
  transparent: palette.transparent,
  shadowBlue: palette.transparent_blue_200,
  primary: palette.blue_200,
  secondary: palette.white,
  textDark: palette.black,
  textLight: palette.white,
  placeholder: palette.transparent_blue_200,
  iconLight: palette.white,
  borderLight: palette.white,
  chartColor: palette.white,
  tableColor: palette.white,
  error: palette.error,
  disabled: palette.gray_600,
};

export type IColors = keyof typeof colors;
