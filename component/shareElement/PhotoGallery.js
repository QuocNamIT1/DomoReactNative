import React from 'react';
import { View, Text, Animated, Dimensions, ListView } from 'react-native';
import Transition from './transition';
import DetailScreen from './detailScreen';

import PropTypes from 'prop-types';
import PHOTOS from '../../data'
import { processImages, buildRows, normalizeRows } from '../../utils/utils'
import GridItem from './gridItem';


const maxWidth = Dimensions.get('window').width;
export default class PhotoGallery extends React.Component {
    // static Photo = PhotoGalleryPhoto;

    state = {
        photo: null,
        openProgress: new Animated.Value(0),
        isAnimating: false
    };



    _images = {};
    _data = {};
    _imageOpacitySetters = {};

    static childContextTypes = {
        onImageRef: PropTypes.func
    };

    componentWillMount() {
        const processedImages = processImages(PHOTOS);
        let rows = buildRows(processedImages, maxWidth);
        rows = normalizeRows(rows, maxWidth);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.data = {
            dataSource: ds.cloneWithRows(rows)
        };

        console.log("Data  : " + JSON.stringify(rows));
    }

    getChildContext() {
        return { onImageRef: this._onImageRef };
    }

    _onImageRef = (photo, imageRef, setOpacity) => {
        this._images[photo.id] = imageRef;
        this._imageOpacitySetters[photo.id] = setOpacity;
    };

    open = photo => {
        this._imageOpacitySetters[photo.id](
            this.state.openProgress.interpolate({
                inputRange: [0.005, 0.01],
                outputRange: [1, 0]
            })
        );
        this.setState({ photo, isAnimating: true }, () => {
            Animated.timing(this.state.openProgress, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            }).start(() => {
                this.setState({ isAnimating: false });
            });
        });
    };

    close = photoId => {
        this.setState({ photo: null, isAnimating: true }, () => {
            Animated.timing(this.state.openProgress, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start(() => {
                this._imageOpacitySetters[photoId](1);
                this.setState({ isAnimating: false });
            });
        });
    };

    renderRow = (onPhotoOpen, row) =>
        <View
            style={{
                flexDirection: 'row',
                marginBottom: 5,
                justifyContent: 'space-between'
            }}
        >
            {row.map(item =>
                <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
            )}
        </View>;

    render() {
        const { photo, openProgress, isAnimating } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ListView
                    dataSource={this.data.dataSource}
                    renderRow={this.renderRow.bind(this, this.open)}
                />
                {/* <Transition
                    openProgress={openProgress}
                    photo={photo}
                    sourceImageRefs={this._images}
                    isAnimating={isAnimating}
                /> */}
                <DetailScreen
                    photo={photo}
                    onClose={this.close}
                    openProgress={openProgress}
                    isAnimating={isAnimating}
                />
            </View>
        );
    }
}