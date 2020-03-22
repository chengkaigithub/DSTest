/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e"/>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { id: Math.floor(Math.random() * 100) })}
      />
    </View>
  );
}

function MineScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e"/>
      <Text>Mine Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { id: Math.floor(Math.random() * 100) })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen{JSON.stringify(route.params)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()}/>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
      <Button
        title="界面三"
        onPress={() => navigation.navigate('ThreeScreen')}
      />
    </View>
  );
}

function ThreeScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      alert('ThreeScreen focus');
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ThreeScreen Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 25, height: 25 }}
      source={require('./assets/imgs/ic_launcher_round.png')}
    />
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      lazy
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarButton: props => (
          <TouchableOpacity
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
            iconName = focused ? require('./assets/imgs/tab-icon/payment-on.png') : require('./assets/imgs/tab-icon/payment-off.png');
          } else if (route.name === 'Mine') {
            iconName = focused ? require('./assets/imgs/tab-icon/account-on.png') : require('./assets/imgs/tab-icon/account-off.png');
          }
          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20 }}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '首页' }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{ title: '我的' }}
      />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Tabs"
      mode="card"
      headerMode="screen"
      screenOptions={({ navigation }) => ({
        headerBackImage: () => <LogoTitle/>,
        headerBackground: () => (
          <Image
            style={StyleSheet.absoluteFill}
            source={{
              uri:
                'https://xyf-mpaw.suixingpay.com/static/min-program/img/nav_header.png',
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
      })}>
      <Stack.Screen name="Tabs" component={Tabs}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route, navigation }) => ({
          title: `详情${route.params ? route.params.id : ''}`,
          // header: () => null,
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Text
              onPress={() => alert('This is a button!')}
              title="Info"
              style={{ color: '#fff' }}>
              Info
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="ThreeScreen"
        component={ThreeScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          title: '界面三',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
