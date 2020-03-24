import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoAction } from '../../store/action';

/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */

export default function HomeScreen({ navigation }) {
  let userInfo = useSelector(state => state.userInfo);
  let dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Text
        onPress={() => {
          dispatch(userInfoAction);
        }}>
        Home Screen{JSON.stringify(userInfo)}
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { id: Math.floor(Math.random() * 100) })}
      />
    </View>
  );
};
