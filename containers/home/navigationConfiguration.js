import { StackNavigator } from 'react-navigation';
import HomeContainer from './homeContainer'
import Profile from '../../component/profile'

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

export default HomeTab