jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

const mockedFirebaseAnalyticsLogEvent = jest.fn();
const mockedFirebaseAnalyticsLogLogin = jest.fn();
const mockedFirebaseAnalyticsSetUserId = jest.fn();
jest.mock('@react-native-firebase/analytics', () => () => ({
  logEvent: mockedFirebaseAnalyticsLogEvent,
  logLogin: mockedFirebaseAnalyticsLogLogin,
  setUserId: mockedFirebaseAnalyticsSetUserId,
}));

const mockedFirebaseCrashlyticsLog = jest.fn();
const mockedFirebaseCrashlyticsRecordError = jest.fn();
jest.mock('@react-native-firebase/crashlytics', () => () => ({
  log: mockedFirebaseCrashlyticsLog,
  recordError: mockedFirebaseCrashlyticsRecordError,
}));

jest.mock('@shopify/react-native-skia', () => {
  jest.mock('@shopify/react-native-skia/lib/commonjs/Platform', () => {
    const Noop = () => undefined;
    return {
      OS: 'web',
      PixelRatio: 1,
      requireNativeComponent: Noop,
      resolveAsset: Noop,
      findNodeHandle: Noop,
      NativeModules: Noop,
      View: Noop,
    };
  });

  return null;
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));