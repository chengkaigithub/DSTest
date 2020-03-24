import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */

export default function MineScreen({ navigation }) {
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Text>Mine Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { id: Math.floor(Math.random() * 100) })}
      />
      <Button
        title="fetch user info"
        onPress={() => {
          dispatch({
            type: 'FETCH_USER_INFO',
            payload: {
              success: data => {
                console.log('成功', data, userInfo);
              },
              fail: err => console.log('失败', err),
            },
          });
        }}
      />
    </View>
  );
}
