/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../pages/main-tabs';
import navs from '../pages';

const Stack = createStackNavigator();

function BackImage() {
  return <Image style={{ width: 25, height: 25 }} source={require('../assets/imgs/ic_launcher_round.png')} />;
}

const baseScreenOptions = ({ navigation }) => ({
  headerBackImage: () => <BackImage />,
  headerBackground: () => (
    <Image
      style={StyleSheet.absoluteFill}
      source={{
        uri: 'https://xyf-mpaw.suixingpay.com/static/min-program/img/nav_header.png',
      }}
    />
  ),
  // headerTransparent: true,
  headerShown: 'none',
  headerTitleAlign: 'center',
  headerTitleAllowFontScaling: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureDirection: 'horizontal',
  gestureEnabled: true,
  headerBackTitle: ' ',
  headerTruncatedBackTitle: 'true',
  headerStyle: {
    backgroundColor: '#FFF',
    ...Platform.select({
      android: { height: 65 },
      ios: {},
    }),
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const mergeNavs = Object.assign(Tabs, navs);

export default function RootNavs() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs" mode="card" headerMode="screen" screenOptions={baseScreenOptions}>
        {Object.keys(mergeNavs).map(name => (
          <Stack.Screen
            key={name}
            name={name}
            component={mergeNavs[name].component}
            options={mergeNavs[name].options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
