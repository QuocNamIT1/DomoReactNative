import React, { Component } from 'react';
import HomeTab from './navigationConfiguration'
import { StyleSheet } from 'react-native'
import { Container, Icon } from 'native-base'

export class TabHomeNavigation extends Component {
    static navigationOptions = {
        title: "Home",
        tabBarIcon: () => (
            <Icon style={styles.icon} name='home' />
        )
    }

    render() {
        return (
            <Container>
                <HomeTab />
            </Container>
        )
    }
};

export default TabHomeNavigation;

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});