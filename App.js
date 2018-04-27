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
import Profile from './component/profile';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import AppNavigation from './containers/AppNavigation/appNavigation'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store} >
        <AppNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});