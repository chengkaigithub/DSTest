/**
 * Create by chengkai on 2020/3/24.
 * Describe:
 */
import React from 'react';
import { Image, Text } from 'react-native';
import DetailsScreen from './details-screen';
import ThreeScreen from './three-screen';
import { CardStyleInterpolators } from '@react-navigation/stack';

function LogoTitle() {
  return <Image style={{ width: 25, height: 25 }} source={require('../assets/imgs/ic_launcher_round.png')} />;
}

function HeaderRight() {
  return (
    <Text onPress={() => alert('This is a button!')} title="Info" style={{ color: '#fff' }}>
      Info
    </Text>
  );
}

export default {
  Details: {
    options: ({ route, navigation }) => ({
      title: `详情${route.params ? route.params.id : ''}`,
      // header: () => null,
      headerTitle: props => <LogoTitle {...props} />,
      headerRight: props => <HeaderRight {...props} />,
    }),
    component: DetailsScreen,
  },
  ThreeScreen: {
    options: {
      title: '界面三',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    },
    component: ThreeScreen,
  },
};
