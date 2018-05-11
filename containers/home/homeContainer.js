import React, { Component } from 'react'
import Home from '../../component/home'
import { loadUserAsync } from '../../actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class HomeContainer extends Component {
    render() {
        const { state, loadUsers } = this.props;
        return (
            <Home {...this.props} users={state.users} isBusy={state.isBusy} loadUsers={loadUsers} />
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.home
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: bindActionCreators(loadUserAsync, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)