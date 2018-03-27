import { TabNavigator } from 'react-navigation'
import HomeContainer from './homeContainer'
import Dummy from '../component/dummy';

const routeConfiguration = {
    HomeNavigation: { screen: HomeContainer },
    DummyNavigation: { screen: Dummy },
    DummyNavigation1: { screen: Dummy }
}

const tabbarConfiguration = {

}

export const TabBar = TabNavigator(routeConfiguration,tabbarConfiguration)