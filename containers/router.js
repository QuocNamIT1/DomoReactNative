import { StackNavigator } from 'react-navigation';
import LoginContainer from './loginContainer'
import { TabBar } from './navigationConfig'

const Router = StackNavigator({
    Login: { screen: LoginContainer },
    TabBar: { screen: TabBar },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default Router