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
            <View {...this.props}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{this.props.user.name}</Text>
                <Text style={{ fontSize: 15 }}>Information Technology</Text>
            </View >
        )
    }
}