import React from 'react';
import Header from '../Header';
import FormRegister from '../FormRegister';
import './styles.scss';

function Register() {
    return (
        <div className="Register--page">
            <Header />
            <div className="Register--form">
                <FormRegister />
            </div>
        </div>
    );
}

export default Register;