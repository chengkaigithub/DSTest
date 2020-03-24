import React from 'react';
import { Button, Text, View } from 'react-native';

/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */
export default function ThreeScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      alert('ThreeScreen focus');
    });
    return () => {
      console.log('clean');
      unsubscribe();
    };
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ThreeScreen Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
