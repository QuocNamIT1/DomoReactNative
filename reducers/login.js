import { LOGIN_SUCCESS, LOGIN_PENDING } from '../actions/actionTypes';
import { combineReducers } from 'redux'

const initialState = {
    isBusy: false
}

function login(state = initialState , action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return { isBusy: true };
        case LOGIN_SUCCESS:
            return { isBusy: false }
        default:
            return state;
    }
}

export default login