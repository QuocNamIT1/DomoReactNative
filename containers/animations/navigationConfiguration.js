import { StackNavigator } from 'react-navigation';
import AnimationContainer from './animationContainer';

const AnimationTab = StackNavigator({
    Animation: { screen: AnimationContainer }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default AnimationTab