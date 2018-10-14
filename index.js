/** @format */

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'News',
      screen: 'tab.list', // this is a registered name for a screen
      icon: require('./src/img/button.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'News',
    },
  ]
});
