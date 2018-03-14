import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class InfoUser extends Component {

    render() {
        return (
            <View style={this.props.style}>
                <Text>{this.props.user.fullName}</Text>
                <Text>{this.props.user.fullName}</Text>
                <Text>{this.props.user.fullName}</Text>
                <Text>{this.props.user.fullName}</Text>
            </View>    
        )
    }
}