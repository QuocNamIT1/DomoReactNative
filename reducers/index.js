import login from './login'
import home from './home'
import { combineReducers } from 'redux'
import { tabBarReducer } from "../containers/tabBar/navigationConfig"
// Navigation
import  HomeTab  from '../containers/home/navigationConfiguration'
import  AnimationTab  from '../containers/animations/navigationConfiguration'
import  CustomerTab  from '../containers/customer/navigationConfiguration'
import AppNavigation from "../containers/AppNavigation/navigationConfig"
import { MainTab } from '../containers/tabBar/navigationConfig'
import { navigationReducer } from '../containers/AppNavigation/appNavigation';

export default combineReducers({
    tabBar: tabBarReducer,
    NavigationReducer: (state,action) => AppNavigation.router.getStateForAction(action,state),
    tabHome: (state,action) => HomeTab.router.getStateForAction(action,state),
    tabAnimation: (state,action) => AnimationTab.router.getStateForAction(action,state),
    tabCustomer: (state,action) => CustomerTab.router.getStateForAction(action,state),
    login, home })