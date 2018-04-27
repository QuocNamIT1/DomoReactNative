import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import { Container, Icon } from 'native-base'
import AnimationTab from './navigationConfiguration';

export default class TabAnimationNavigation extends Component {
    static navigationOptions = {
        title: "Aniamtion",
        tabBarIcon: () => (
            <Icon style={styles.icon} name='beer' />
        )
    }

    render() {
        return (
            <Container>
               <AnimationTab/>
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});