import React from 'react';
import Header from './Header';
import FormLogin from './FormLogin';
import './styles.scss';

function Login() {
    return (
        <div className="page">
            <div className="form">
                <Header />
                <FormLogin />
            </div>
        </div>
    );
}

export default Login;