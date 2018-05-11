import React, { Component } from 'react';
import { View, Button, Container, Text } from 'native-base';
import { Animated ,TouchableOpacity} from 'react-native'
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
        const {onNavigateToHomTab} =this.props;
        return (
            <Container>
                <Animated.View
                    style={{
                        ...this.props.style,
                        width: widthView,
                        // opacity: fadeAnim,         // Bind opacity to animated value
                    }}
                >
                    {this.props.children}
                </Animated.View>

                 <TouchableOpacity
                    onPress={onNavigateToHomTab}
                    style={{
                        padding:20,
                        borderRadius:20,
                        backgroundColor:'deeppink',
                        marginTop:20
                    }}>
                    <Text>{'jump to tab one'}</Text>
        </TouchableOpacity>
            </Container>
        );
    }
};

export default TestAnimation;
