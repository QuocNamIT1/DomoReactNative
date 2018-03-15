/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  SectionList,
  Animated
} from 'react-native';
import Login from './component/login';
import Home from './component/home';
import Profile from './component/profile';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Profile: { screen: Profile },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(">>>> Debug");
//     return (
//       <View style={{ flex: 1 }}>
//         <Login />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
// });

export default Navigation;
