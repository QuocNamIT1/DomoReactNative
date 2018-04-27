import { StackNavigator } from 'react-navigation';
import CustomerContainer from './customerContainer';

const CustomerTab = StackNavigator({
    Customer: { screen: CustomerContainer }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default CustomerTab