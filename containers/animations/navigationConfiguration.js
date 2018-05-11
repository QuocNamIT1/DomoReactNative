import { StackNavigator } from 'react-navigation';
import AnimationContainer from './animationContainer';
import PhotoGallery from '../../component/shareElement/PhotoGallery';

const AnimationTab = StackNavigator({
    Animation: { screen: PhotoGallery }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default AnimationTab