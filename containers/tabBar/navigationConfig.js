import { TabNavigator } from 'react-navigation'
import Dummy from '../../component/dummy';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react';
import  TabHomeNavigation  from '../home/tabHomeNavigation';
import TabCustomerNavigation from '../customer/tabCustomerNavigation';
import TabAnimationNavigation from '../animations/tabAnimationNavigation';

const routeConfiguration = {
    HomeNavigation: {
        screen: TabHomeNavigation,
    },
    AnimationNavigation: {
        screen: TabAnimationNavigation, 
    },
    CustomerNaviagtion: {
        screen: TabCustomerNavigation,
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
}

// const tabBarConfiguration = {
//     //...other configs
//   tabBarOptions:{
//       // tint color is passed to text and icons (if enabled) on the tab bar
//       activeTintColor: 'white',
//       inactiveTintColor: 'blue',
//   // background color is for the tab component
//       activeBackgroundColor: 'blue',
//       inactiveBackgroundColor: 'white',
//     }
//   }
  

export const MainTab = TabNavigator(routeConfiguration, tabbarConfiguration)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

export const tabBarReducer = (state, action) => {
    if (action.type === 'JUMP_TO_TAB') {
      return { ...state, index: 0 };
    } else {
      return MainTab.router.getStateForAction(action, state);
    }
  };