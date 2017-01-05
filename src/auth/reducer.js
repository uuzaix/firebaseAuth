const defaultState = {authenticated: false, userId: null};

export const auth = (state=defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {authenticated: true, userId: action.uid})
        case 'LOGOUT_SUCCESS':
            return defaultState;
        default:
            return state;
    }
}
