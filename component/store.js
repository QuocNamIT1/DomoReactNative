import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
// import { Container, Content, Header, List, ListItem, Thumbnail, Left, Right, Body, Button, Icon, Title, Text } from 'native-base';

export default class Store extends Component {

    navigateToTransaction = () => {
        var { navigate } = this.props.navigation;
        navigate('Transaction');
    }

    render() {
        return (
            <View {...this.props}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Dummy</Text>
                <Text style={{ fontSize: 15 }}>Information Technology</Text>
                <Button onPress={this.navigateToTransaction} title='Navigate to Transaction'></Button>
            </View >
        )
    }
}