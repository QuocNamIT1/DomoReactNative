import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
// import { Container, Content, Header, List, ListItem, Thumbnail, Left, Right, Body, Button, Icon, Title, Text } from 'native-base';

export default class Dummy extends Component {

    render() {
        return (
            <View {...this.props}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Dummy</Text>
                <Text style={{ fontSize: 15 }}>Information Technology</Text>
            </View >
        )
    }
}