import { LOGIN_PENDING, LOGIN_SUCCESS } from './actionTypes';

export function login(username, password) {
    return {
        type: LOGIN_PENDING,
        username,
        password
    }
}

export function loginAsync(username, password, callback) {
    return dispatch => {
        dispatch(login(username, password));
        setTimeout(() => {
            dispatch({ type: LOGIN_SUCCESS });
            callback();
        }, 5000);
    }
}
