module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: [
    '<rootDir>/__mocks__/setupTests.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|react-navigation|@react-navigation|@shopify/react-native-skia|victory-native/(?!(lib)))',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@types(.*)$': '<rootDir>src/@types$1',
    '^@components(.*)$': '<rootDir>src/components$1',
    '^@analytics(.*)$': '<rootDir>src/analytics$1',
    '^@assets(.*)$': '<rootDir>src/assets$1',
    '^@resources(.*)$': '<rootDir>src/resources$1',
    '^@routes(.*)$': '<rootDir>src/routes$1',
    '^@screens(.*)$': '<rootDir>src/screens$1',
    '^@services(.*)$': '<rootDir>src/services$1',
  },
};
