import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormLogin(props) {
    const { getFormLogin, handleNext } = props;

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Đây là thông tin bắt buộc'),
        pass: Yup.string()
            .max(100, 'Mật khẩu quá dài')
            .min(2, 'Mật khẩu quá ngắn')
            .required('Đây là thông tin bắt buộc!')
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            getFormLogin(values);
            handleNext();
        }
    });
    return (
        <Box >
            <Formik>
                <form action='' onSubmit={formik.handleSubmit}>
                    <TextField className='Login-form__input'
                        type='text'
                        name='email'
                        value={formik.values.email}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        margin='normal'
                        placeholder='Email' />
                    <TextField className='Login-form__input'
                        type='password'
                        name='pass'
                        value={formik.values.pass}
                        error={Boolean(formik.touched.pass && formik.errors.pass)}
                        helperText={formik.touched.pass && formik.errors.pass}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        margin='normal'
                        placeholder='Password' />
                    <Button className='Login-form__button' type='submit' variant='contained' size='large' disableElevation>
                        Đăng Nhập
                    </Button>
                </form>
            </Formik>
            <div className='Login-form__bottom'>
                <div className='Login-form__bottom--link'>
                    <a href=''>Quên mật khẩu?</a>
                </div>
                <div className='Login-form__bottom--link'>
                    <a href='http://localhost:3000/register'>Đăng ký ngay</a>
                </div>
            </div>
            <div className='Login-form__footer'>
                <div className='Login-form__text'>
                    <p className='Login-form__sym'>______________________________________________________________________________________________________________</p>
                    <p className='Login-form__string'>Hoặc đăng nhập bằng tài khoản mạng xã hội</p>
                </div>
                <div className='Login-form__footer--icons'>
                    <i className='fab fa-google'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-github'></i>
                    <i className='fab fa-facebook'></i>
                </div>
            </div>
        </Box>
    );
}
