export * from './crashlytics/recordError/recordError';
export * from './crashlytics/logMessage/logMessage';
export * from './logs/hooks/useScreenView';
export * from './logs/logEvent';
export * from './logs/logScreenView';
// RUN DEBUGVIEW ON IOS xcrun simctl launch "iPhone 8" com.socialcalculator.matheuspires -FIRAnalyticsDebugEnabled
// RUN DEBUGVIEW ON Android adb shell setprop debug.firebase.analytics.app com.socialcalculator.matheuspires
