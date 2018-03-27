import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ToastAndroid
} from 'react-native';
import { Container, Content, Header, List, ListItem, Thumbnail, Left, Right, Body, Button, Icon, Title, Text } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Home extends Component {

    componentDidMount() {
        this.props.loadUsers();
    }

    navigateToProfile = (profile) => () => {
        var { navigate } = this.props.navigation;
        navigate('Profile', { name: profile });
    }

    render() {
        const { users } = this.props;
        return (
            <Container>
                <Header style={{ backgroundColor: '#05A5D1' }}>
                    <Body style={{ margin: 20 }}>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List dataArray={users} renderRow={(user) =>
                        <ListItem button onPress={this.navigateToProfile(user)} >
                            <Thumbnail square size={80} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                            <Body>
                                <Text>{user}</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    }></List>
                    <Spinner
                        visible={this.props.isBusy}
                        textContent="Loading..."
                        textStyle={{ color: '#000' }}
                    />
                </Content>
            </Container>
        );
    }
}