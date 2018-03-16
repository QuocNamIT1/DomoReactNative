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
import Login from './js/component/login';
import Home from './js/component/home';
import Profile from './js/component/profile';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './js/reducers/index';

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

const store = createStore(rootReducer)


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store} >
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});