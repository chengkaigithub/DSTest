import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../home-screen';
import MineScreen from '../mine-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */
function Tabs() {
  return (
    <Tab.Navigator
      lazy
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarButton: props => (
          <TouchableOpacity
            activeOpacity={0.7}
            {...props}
            onPress={() => {
              if (props.accessibilityLabel.split(',')[0] === '我的') {
                props.onPress();
              } else {
                props.onPress();
              }
            }}
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/imgs/tab-icon/payment-on.png')
              : require('../../assets/imgs/tab-icon/payment-off.png');
          } else if (route.name === 'Mine') {
            iconName = focused
              ? require('../../assets/imgs/tab-icon/account-on.png')
              : require('../../assets/imgs/tab-icon/account-off.png');
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
      tabBarOptions={{
        allowFontScaling: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
      <Tab.Screen name="Mine" component={MineScreen} options={{ title: '我的' }} />
    </Tab.Navigator>
  );
}

export default {
  Tabs: {
    component: Tabs,
  },
};
