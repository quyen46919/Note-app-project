import React from 'react';
import Header from './Header';
import FormRegister from './FormRegister';
import './styles.scss';

function Register() {
    return (
        <div className="page">
            <div className="form">
                <Header />
                <FormRegister />
            </div>
        </div>
    );
}

export default Register;