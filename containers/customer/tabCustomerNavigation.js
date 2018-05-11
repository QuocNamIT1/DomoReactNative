import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import CustomerTab from './navigationConfiguration';
import { Container, Icon } from 'native-base'

class TabCustomerNavigation extends Component {
    static navigationOptions = {
        title: "Dummy",
        tabBarIcon: () => (
            <Icon style={styles.icon} name='star' />
        )
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <CustomerTab/>
            </Container >
        )
    }
};

export default TabCustomerNavigation;

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});