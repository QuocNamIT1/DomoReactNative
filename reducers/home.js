import { LOAD_USERS_PENDING, LOAD_USERS_SUCCESS } from '../actions/actionTypes'

var initialState = {
    users: {},
    isBusy: false
};
const listuser = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren',
    'Mama Sakho', 'Emre Can', 'Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

function home(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS_PENDING:
            return { ...state, isBusy: true };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: listuser,
                isBusy: false
            }
        default:
            return state;
    }
}

export default home