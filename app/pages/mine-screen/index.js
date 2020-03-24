import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */

export default function MineScreen({ navigation }) {
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
