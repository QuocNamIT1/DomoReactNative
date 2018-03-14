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


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
