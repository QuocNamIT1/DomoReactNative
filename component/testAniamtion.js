import React, { Component } from 'react';
import { View } from 'native-base';
import { Animated } from 'react-native'
export class TestAnimation extends Component {
    state = {
        widthView: new Animated.Value(100),
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.widthView,            // The animated value to drive
            {
                toValue: 200,                   // Animate to opacity: 1 (opaque)
                duration: 10000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim, widthView } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    width: widthView,
                    // opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
};

export default TestAnimation;
