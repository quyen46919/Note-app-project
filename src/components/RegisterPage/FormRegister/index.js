import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';
import { useForm } from 'react-hook-form';


export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField className="Register-form__input" type="text" placeholder="Email" id="margin-normal" margin="normal" {...register('email', { required: 'Email is Required' })} />
                <TextField className="Register-form__input" type="password" placeholder="Mật khẩu" id="margin-normal" margin="normal" {...register('pass', { required: 'Password is Required' })} />
                <TextField className="Register-form__input" type="password" placeholder="Nhập lại mật khẩu" id="margin-normal" margin="normal" {...register('pass', { required: 'Password is Required' })} />
                <TextField className="Register-form__input" type="password" placeholder="Số điện thoại" id="margin-normal" margin="normal" {...register('sdt', { required: 'Phone number is Required' })} />
                <div className="Register-form__checkbox">
                    <input type="checkbox" />
                    <div className="Register-form__rules">
                        <p>Tôi đã đọc và đồng ý với <a className="rule" href="">Điều khoản dịch vụ</a> và <a className="sec" href="">Bảo mật</a></p>
                    </div>
                </div>
                <Button className="Register-form__button" variant="contained" disableElevation>Đăng ký</Button>
            </form>
            <div className="Register-form__footer">
                <div className="Register-form__text">
                    <p className="Register-form__sym">______________________________________________________________________________________________________________</p>
                    <p className="Register-form__string">Hoặc đăng ký bằng tài khoản mạng xã hội</p>
                </div>
                <div className="Register-form__footer--icons">
                    <i className="fab fa-google"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
        </Box>
    );
}
