import * as React from 'react';
import Box from '@mui/material/Box';
import './styles.scss';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box>
            <div className="Register-form--header">
                <div className="Register-form--header__left">
                    <div className="Register-form--header__left_nottable">
                        <img src={logo} alt="Nottable" />
                    </div>
                </div>
                <div className="Register-form--header__right">
                    <div className="Register-form--header__right_language">
                        <i className="fas fa-globe"></i>
                        <select name="lang" id="lang">
                            <option value="vietnam">Tiếng Việt</option>
                            <option value="eng">English</option>
                            <option value="china">China</option>
                            <option value="japan">Japan</option>
                        </select>
                    </div>
                    <div className="Register-form--header__right_link">
                        <Link to="/login">
                            Trở về đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Register-form--title">
                Đăng ký bằng Email
            </div>
        </Box>
    );
}
