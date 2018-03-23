import { loginAsync } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Login from '../component/login'

class LoginContainer extends Component {
    render() {
        const { login } = this.props;
        return (
            <Login {...this.props} isBusy={this.props.state.isBusy} login={(username, password, callback) => {
                login(username, password, callback);
            }} />
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.login
    };
}

// const mapDispatchToProps = (dispatch) => {
//     console.log(">>>>>mapDispatchToProps>>>" + JSON.stringify(bindActionCreators(login, dispatch)))
//     return { login2: bindActionCreators(login, dispatch) };
// }

function mapDispatchToProps(dispatch) {
    return { login: bindActionCreators(loginAsync, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)