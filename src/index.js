import { AuthContextProvider } from 'context/AuthContext';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
    // <React.StrictMode>
    <AuthContextProvider>
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            transitionDuration={{ exit: 200 }}
        >
            <App />
        </SnackbarProvider>
    </AuthContextProvider>
    // </React.StrictMode>
    ,
    document.getElementById('root')
);