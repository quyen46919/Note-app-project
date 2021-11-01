import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const schema = yup.object({
//     firstName: yup.string().required(),
//     age: yup.number().positive().integer().required()
// }).required();


function RedBar() {
    return (
        <Box></Box>
    );
}

export default function FormLogin() {
    // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    // const onSubmit = data => console.log(data);
    return (
        <Box >
            <form action="" >
                <RedBar />
                <TextField className="Login-form__input" type="text" id="margin-normal" margin="normal" placeholder="Email" />
                <RedBar />
                <TextField className="Login-form__input" type="password" id="margin-normal" margin="normal" placeholder="Password" />
                <RedBar />
                <Button className="Login-form__button" variant="contained" size="large" disableElevation>
                    Đăng Nhập
                </Button>
            </form>
            <div className="Login-form__bottom">
                <div className="Login-form__bottom--link">
                    <a href="">Quên mật khẩu?</a>
                </div>
                <div className="Login-form__bottom--link">
                    <a href="http://localhost:3000/register">Đăng ký ngay</a>
                </div>
            </div>
            <div className="Login-form__footer">
                <div className="Login-form__text">
                    <p className="Login-form__sym">______________________________________________________________________________________________________________</p>
                    <p className="Login-form__string">Hoặc đăng nhập bằng tài khoản mạng xã hội</p>
                </div>
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
