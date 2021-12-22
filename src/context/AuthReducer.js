const AuthReducer = (state, action) => {
    switch (action.type) {
    case 'LOGIN_START':
        return {
            nottableUser: null,
            nottableTokens: null,
            isFetching: true,
            error: false
        };
    case 'LOGIN_SUCCESS':
        return {
            nottableUser: action.payload.user,
            nottableTokens: action.payload.tokens,
            isFetching: false,
            error: false
        };
    case 'LOGIN_FAILURE': case 'LOGOUT':
        return {
            nottableUser: null,
            nottableTokens: null,
            isFetching: false,
            error: true
        };
    case 'UPDATE_PROFILE':
        return {
            nottableUser: action.payload,
            isFetching: false,
            error: true
        };
    default:
        return state;
    }
};

export default AuthReducer;
