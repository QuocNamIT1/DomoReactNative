import { TabNavigator } from 'react-navigation'
import HomeContainer from './homeContainer'
import Dummy from '../component/dummy';
import Profile from '../component/profile'
import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react';
import Customer from '../component/customer';

const HomeTab = StackNavigator({
    Home: { screen: HomeContainer },
    Profile: { screen: Profile }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

const routeConfiguration = {
    HomeNavigation: {
        screen: HomeTab, navigationOptions: {
            title: "Home",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='rose' />
            )
        }
    },
    DummyNavigation1: {
        screen: Dummy, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='beer' />
            )
        }
    },
    CustomerNaviagtion: {
        screen: Customer, navigationOptions: {
            title: "Dummy",
            tabBarIcon: () => (
                <Icon style={styles.icon} name='baseball' />
            )
        }
    },
}

const tabbarConfiguration = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false
    },
    swipeEnabled: false,
    lazyLoad: true,
    animationEnabled: false,
}

export const MainTab = TabNavigator(routeConfiguration, tabbarConfiguration)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});