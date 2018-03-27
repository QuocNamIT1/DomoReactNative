import { LOGIN_PENDING, LOGIN_SUCCESS, LOAD_USERS_PENDING, LOAD_USERS_SUCCESS } from './actionTypes';

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
        }, 2000);
    }
}

export function loadUserAsync() {
    return dispatch => {
        dispatch({ type: LOAD_USERS_PENDING });
        setTimeout(() => {
            dispatch({ type: LOAD_USERS_SUCCESS });
        }, 2000);
    }
}

