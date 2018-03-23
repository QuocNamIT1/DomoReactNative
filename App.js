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
import LoginContainer from './containers/loginContainer';
import Home from './component/home';
import Profile from './component/profile';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const Navigation = StackNavigator({
  Login: { screen: LoginContainer },
  Home: { screen: Home },
  Profile: { screen: Profile },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const store = createStore(rootReducer,applyMiddleware(thunk));


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