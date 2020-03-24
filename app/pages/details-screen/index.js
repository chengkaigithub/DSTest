import React from 'react';
import { Button, Text, View } from 'react-native';

/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */
export default function DetailsScreen({ route, navigation }) {
  const [count, setCount] = React.useState(0);
  const increaseCount = () => setCount(count + 1);
  React.useEffect(() => {
    console.log('挂载');
    return () => console.log('卸载');
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={increaseCount}>{count}</Text>
      <Text>Details Screen{JSON.stringify(route.params)}</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
      <Button title="Update the title" onPress={() => navigation.setOptions({ title: 'Updated!' })} />
      <Button title="界面三" onPress={() => navigation.navigate('ThreeScreen')} />
    </View>
  );
}
