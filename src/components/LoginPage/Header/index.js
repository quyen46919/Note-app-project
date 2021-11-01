import * as React from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import './styles.scss';
import logo from 'assets/images/logo.png'; // with import
import nottable from 'assets/images/Nottable.png';
// import IntroPage from 'components/IntroPage';

export default function Header() {
    return (
        <Box>
            <div className="Login-form--header">
                <div className="Login-form--header__left">
                    <div className="Login-form--header__left_image">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="Login-form--header__left_nottable">
                        <img src={nottable} alt="Nottable" />
                    </div>
                </div>
                <div className="Login-form--header__right">
                    <div className="Login-form--header__right_language">
                        <i className="fas fa-globe"></i>
                        <select name="lang" id="lang">
                            <option value="vietnam">Tiếng Việt</option>
                            <option value="eng">English</option>
                            <option value="china">China</option>
                            <option value="japan">Japan</option>
                        </select>
                    </div>
                    <div className="Login-form--header__right_link">
                        <a href="http://localhost:3000/register">Đi đến đăng ký</a>
                    </div>
                </div>
            </div>
            <div className="Login-form--title">
                    Đăng nhập bằng Email
            </div>
        </Box>
    );
}
