import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';


function RedBar() {
    return (
        <Box></Box>
    );
}

export default function FormRegister() {
    return (
        <Box>
            <RedBar />
            <TextField className="Login-form__input" type="text" label="Email" id="margin-normal" margin="normal" />
            <RedBar />
            <TextField className="Login-form__input" type="password" label="Mật khẩu" id="margin-normal" margin="normal" />
            <RedBar />
            <TextField className="Login-form__input" type="password" label="Nhập lại mật khẩu" id="margin-normal" margin="normal" />
            <RedBar />
            <TextField className="Login-form__input" type="password" label="Số điện thoại" id="margin-normal" margin="normal" />
            <RedBar />
            <input type="checkbox" />
            <div>
                <Button className="Login-form__button" variant="contained" size="large">
                    Đăng ký
                </Button>
            </div>
            {/* <div className="Login-form__bottom">
                <div className="Login-form__bottom--link">
                    <a href="">Quên mật khẩu?</a>
                </div>
                <div className="Login-form__bottom--link">
                    <a href="http://localhost:3000/register">Đăng ký ngay</a>
                </div>
            </div> */}
            <div className="Login-form__footer">
                <p>Hoặc đăng nhập bằng mạng xã hội</p>
                <div className="Login-form__footer--icons">
                    <i className="fab fa-google"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
        </Box>
    );
}
