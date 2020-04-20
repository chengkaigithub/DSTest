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

global.ErrorUtils.setGlobalHandler(e => {
  if (!e || !(e instanceof Error) || !e.stack) return {};
  try {
    const stack = e.stack.toString().split(/\r\n|\n/),
      frameRE = /:(\d+:\d+)[^\d]*$/;
    while (stack.length) {
      const frame = frameRE.exec(stack.shift());
      if (frame) {
        // 堆栈信息里面的行数和列数
        const position = frame[1].split(':');
        return { line: position[0], column: position[1] };
      }
    }
  } catch (e) {
    return {};
  }
});

export default () => (
  <Provider store={store}>
    <RootNavs />
  </Provider>
);
