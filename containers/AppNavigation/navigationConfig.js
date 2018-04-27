import { StackNavigator } from 'react-navigation';
import LoginContainer from '../../containers/loginContainer'
import TabNavigation from '../tabBar/tabNavigation'

const Router = StackNavigator({
    Login: { screen: LoginContainer },
    Main: { screen: TabNavigation },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default Router