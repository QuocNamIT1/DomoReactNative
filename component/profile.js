import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import InfoUser from './infoUser';
import { Container, Header, Title, Left, Right, Body, Content, Form, Text, Icon, Item, Input, Label, Button } from 'native-base';

export default class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("state", this.props.navigation.state.params);
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#05A5D1' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{marginTop: 30, width: 100, height: 100, borderRadius: 50 }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                        <InfoUser style={{ marginTop: 20}} user={{ name: this.props.navigation.state.params.name }} />
                    </View>
                </Content>
            </Container >
        )
    }
}