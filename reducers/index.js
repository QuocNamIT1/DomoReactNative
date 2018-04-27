import login from './login'
import home from './home'
import { combineReducers } from 'redux'
import { tabBarReducer } from "../containers/tabBar/navigationConfig"

// Navigation
import  HomeTab  from '../containers/home/navigationConfiguration'
import  AnimationTab  from '../containers/animations/navigationConfiguration'
import  CustomerTab  from '../containers/customer/navigationConfiguration'

import { MainTab } from '../containers/tabBar/navigationConfig'

export default combineReducers({
    tabBar: tabBarReducer,
tabHome: (state,action) => HomeTab.router.getStateForAction(action,state),
tabAnimation: (state,action) => AnimationTab.router.getStateForAction(action,state),
tabCustomer: (state,action) => CustomerTab.router.getStateForAction(action,state),
    login, home })