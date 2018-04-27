'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { MainTab } from './navigationConfig'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <MainTab
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
