import { StackNavigator } from 'react-navigation';
import LoginContainer from './loginContainer'
import { MainTab } from './navigationConfig'

const Router = StackNavigator({
    Login: { screen: LoginContainer },
    Main: { screen: MainTab },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default Router