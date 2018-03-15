import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ToastAndroid
} from 'react-native';
import { Container, Content, Header, List, ListItem, Thumbnail, Left, Right, Body, Button, Icon, Title, Text } from 'native-base';

export default class Home extends Component {

    // static navigationOptions = {
    //     title: 'Home',
    // };

    constructor(props) {
        super(props);
    }

    navigateToProfile = (profile) => {
        var { navigate } = this.props.navigation;
        navigate('Profile', { name: profile });
    }

    render() {
        var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can', 'Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
        return (
            <Container>
                <Header style={{ backgroundColor: '#05A5D1' }}>
                    {/* <Left>
                        <Button  transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left> */}
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
                    <List dataArray={items} renderRow={(item) =>
                        <ListItem button onPress={this.navigateToProfile.bind(this,item)} >
                            <Thumbnail square size={80} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                            <Body>
                                <Text>{item}</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    }></List>
                </Content>
            </Container>
        );
    }
}