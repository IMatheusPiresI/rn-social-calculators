import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
require('react-native-reanimated').setUpTests();
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

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
jest.mock('react-native-reanimated', () => {
  const Reanimated = jest.requireActual('react-native-reanimated');
  return {
    ...Reanimated,
    useSharedValue: jest.fn().mockReturnValue({ value: 0 }),
    useAnimatedStyle: jest.fn().mockImplementation((style) => style()),
    View: 'Animated.View',
    Text: 'Animated.Text',
  };
});

jest.mock('phosphor-react-native', () => ({
  ArrowCircleLeft: jest.fn().mockReturnValue('ArrowCircleLeft.svg'),
  XCircle: jest.fn().mockReturnValue('XCircle.svg'),
}));
