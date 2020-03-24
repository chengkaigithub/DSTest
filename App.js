/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';

import store from './app/store';
import RootNavs from './app/navs';

enableScreens();

export default () => (
  <Provider store={store}>
    <RootNavs />
  </Provider>
);
