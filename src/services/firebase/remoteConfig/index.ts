import remoteConfig from '@react-native-firebase/remote-config';

import { RemoteConfigKeys } from './constants';

export const fetchRemoteConfig = async () => {
  const TIMEOUT_CACHE = 300;
  await remoteConfig().setDefaults({
    selicPercentage: '',
    savingPercentage: '',
  });

  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 10000,
    fetchTimeMillis: 10000,
  });

  await remoteConfig().fetch(TIMEOUT_CACHE);
  await remoteConfig().fetchAndActivate();
};

export const getRemoteValue = (key: RemoteConfigKeys) =>
  remoteConfig().getValue(key).asNumber();
