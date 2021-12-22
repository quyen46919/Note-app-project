import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    nottableUser: JSON.parse(localStorage.getItem('nottable-user')) || null,
    nottableTokens: JSON.parse(localStorage.getItem('nottable-user-tokens')) || null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('nottable-user', JSON.stringify(state.nottableUser));
        localStorage.setItem('nottable-user-tokens', JSON.stringify(state.nottableTokens));
    }, [state.nottableUser, state.nottableTokens]);

    return (
        <AuthContext.Provider
            value={{
                nottableUser: state.nottableUser,
                nottableTokens: state.nottableTokens,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
