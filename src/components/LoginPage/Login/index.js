import React from 'react';
import './styles.scss';
import Header from '../Header';
import FormLogin from '../FormLogin';

function Login() {
    return (
        <div className="Login--page">
            <Header />
            <div className="Login--form">
                <FormLogin />
            </div>
        </div>
    );
}

export default Login;