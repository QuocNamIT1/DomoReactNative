import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ToastAndroid
} from 'react-native';
import { Container, Header, Content, Form, Text, Icon, Item, Input, Label, Button } from 'native-base';

export default class Login extends Component {

    // static navigationOptions = {
    //     headerMode: 'none'
    // };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    login = () => {
        var { navigate } = this.props.navigation;
        if (this.state.username !== '' && this.state.password !== '') {
            // ToastAndroid.show('Login Success', ToastAndroid.SHORT);
            navigate('Home');
        } else {
            ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <View style={{ padding: 30, flex: 1, backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ borderRadius: 50, marginBottom: 30, width: 100, height: 100 }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input value={this.state.username} onChangeText={(value) => this.setState({ username: value })} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input value={this.state.password} onChangeText={(value) => this.setState({ password: value })} />
                    </Item>
                </Form>
                <Button onPress={this.login.bind(this)} style={{ marginTop: 30, backgroundColor: '#05A5D1', borderRadius: 5 }} full>
                    <Text>Login</Text>
                </Button>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    inputsContainer: {
        flex: 1
    },
    fullWidthButton: {
        margin: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#68a0cf',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    fullWidthButtonText: {
        fontSize: 15,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'stretch',
    },
    headline: {
    }
});