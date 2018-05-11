import React from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';

import PropTypes from 'prop-types'

class GridItem extends React.Component {

    state = {
        opacity: 1
    };

    static contextTypes = {
        onImageRef: PropTypes.func
    };

    setOpacity = opacity => {
        this.setState({ opacity });
    };

    render() {
        const { item, onPhotoOpen } = this.props;
        const { opacity } = this.state;
        return (
            <TouchableWithoutFeedback onPress={() => onPhotoOpen(item)}>
                <View>
                    <Animated.Image
                        ref={i => {
                            this.context.onImageRef(item, i, this.setOpacity);
                        }}
                        style={[
                            {
                                width: item.width,
                                height: item.height
                            },
                            {
                                opacity
                            }
                        ]}
                        source={item.source}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default GridItem;