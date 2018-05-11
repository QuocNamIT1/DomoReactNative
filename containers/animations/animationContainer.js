import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import { Container, Icon } from 'native-base'
import { TestAnimation } from '../../component/testAniamtion';

export default class AnimationContainer extends Component {
    static navigationOptions = {
        title: "Aniamtion",
        tabBarIcon: () => (
            <Icon style={styles.icon} name='beer' />
        )
    }

    onNavigateToHomTab = () => {
        const {dispatch} = this.props.navigation;
        dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
    }

    render() {
        return (
            <Container>
                <TestAnimation {...this.props} onNavigateToHomTab={this.onNavigateToHomTab}   style={{  height: 50, backgroundColor: 'powderblue' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
                </TestAnimation>
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