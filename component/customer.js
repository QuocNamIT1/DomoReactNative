import { TabNavigator } from 'react-navigation'
import Dummy from '../component/dummy';
import Profile from '../component/profile';
import { StyleSheet } from 'react-native'
import React, { Component } from 'react';
import { Container, Content, Header, List, ListItem, Thumbnail, Left, Right, Body, Button, Icon, Title, Text } from 'native-base';
import Store from './store';
import { Transaction } from './transaction';

const routeConfiguration = {
    Store: {
        screen: Store, navigationOptions: {
            title: "Store",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='baseball' />
            )
        }
    },
    Transaction: {
        screen: Transaction, navigationOptions: {
            title: "Transaction",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
    DummyNavigation4: {
        screen: Dummy, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
    DummyNavigation5: {
        screen: Dummy, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
    DummyNavigation6: {
        screen: Dummy, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
    DummyNavigation7: {
        screen: Dummy, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
    DummyNavigation8: {
        screen: Dummy, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
}

const tabbarConfiguration = {
    tabBarPosition: 'top',
    tabBarOptions: {
        showIcon: false,
        showLabel: true
    },
    swipeEnabled: false,
    animationEnabled: false,
    tabStyle: {
        width: 200,
    }
}

const CustomerTab = TabNavigator(routeConfiguration, tabbarConfiguration)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

class Customer extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#05A5D1' }}>
                    <Body style={{ margin: 20 }}>
                        <Title>Customer</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <CustomerTab />
                </Content>
            </Container>
        )
    }
};

export default Customer;
