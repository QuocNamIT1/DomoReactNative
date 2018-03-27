import * as type from '../actions/actionTypes';
import { combineReducers } from 'redux'

const initialState = {
    isBusy: false
}

function login(state = initialState , action) {
    switch (action.type) {
        case type.LOGIN_PENDING:
            return { isBusy: true };
        case type.LOGIN_SUCCESS:
            return { isBusy: false }
        default:
            return state;
    }
}

export default login