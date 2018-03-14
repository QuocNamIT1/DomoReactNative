import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import InfoUser from './infoUser';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                fullName: "Quoc Nam"
            }
        };
    }

    render() {
        return (
            <View style={{backgroundColor: 'yellow', flexDirection: 'row'}}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                <InfoUser style={{ backgroundColor: 'red', marginLeft: 30 }} user={this.state.user} />
            </View>
        )
    }
}