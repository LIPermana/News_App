import { Navigation } from 'react-native-navigation';

import List from './List';
import Detail from './Detail';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.list', () => List);
  Navigation.registerComponent('tab.detail', () => Detail);
}
