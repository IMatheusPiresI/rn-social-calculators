module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@types': './src/@types',
          '@components': './src/components',
          '@analytics': './src/analytics',
          '@assets': './src/assets',
          '@resources': './src/resources',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
