import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import { Container, Icon } from 'native-base'
import AnimationTab from './navigationConfiguration';
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

const mapStateToProps = (state) => {
    return {
     navigationState: state.tabAnimation,
     }
   }

class TabAnimationNavigation extends Component {
    static navigationOptions = {
        title: "Aniamtion",
        tabBarIcon: () => (
            <Icon style={styles.icon} name='beer' />
        )
    }

    render() {
        const { dispatch, navigationState } = this.props
        return (
               <AnimationTab navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }/>
        )
    }
};

export default connect(mapStateToProps)(TabAnimationNavigation)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});