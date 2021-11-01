import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
// import { useForm } from 'react-hook-form';


export default function FormRegister(props) {
    const { getFormRegister, handleNext } = props;

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Đây là thông tin bắt buộc'),
        pass: Yup.string()
            .max(100, 'Mật khẩu quá dài')
            .min(2, 'Mật khẩu quá ngắn')
            .required('Đây là thông tin bắt buộc!'),
        passConfirm: Yup.string().required('Đây là thông tin bắt buộc!').oneOf([Yup.ref('pass')], 'Password must match'),
        phoneNumber: Yup.string()
            .max(10, 'Số điện thoại quá dài')
            .min(9, 'Số điện thoại quá ngắn!')
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})/, 'Số điện thoại không hợp lệ')
            .required('Đây là thông tin bắt buộc!')
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
            passConfirm: '',
            phoneNumber: '',
            toggle: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            getFormRegister(values);
            handleNext();
        }
    });
    return (
        <Box>
            <Formik>
                <form onSubmit={formik.handleSubmit}>
                    <TextField className="Register-form__input"
                        type="text" placeholder="Email"
                        // id="margin-normal"
                        name='email'
                        value={formik.values.email}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        margin="normal" />
                    <TextField className="Register-form__input"
                        type="password" placeholder="Mật khẩu"
                        name='pass'
                        value={formik.values.pass}
                        error={Boolean(formik.touched.pass && formik.errors.pass)}
                        helperText={formik.touched.pass && formik.errors.pass}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        // id="margin-normal"
                        margin="normal" />
                    <TextField className="Register-form__input"
                        type="password" placeholder="Nhập lại mật khẩu"
                        name='passConfirm'
                        value={formik.values.passConfirm}
                        error={Boolean(formik.touched.passConfirm && formik.errors.passConfirm)}
                        helperText={formik.touched.passConfirm && formik.errors.passConfirm}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        // id="margin-normal"
                        margin="normal" />
                    <TextField className="Register-form__input"
                        type="password" placeholder="Số điện thoại"
                        name='phoneNumber'
                        value={formik.values.phoneNumber}
                        error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        // id="margin-normal"
                        margin="normal" />
                    <div className="Register-form__checkbox">
                        <input type="checkbox"
                            name='toggle'
                        />
                        <div className="Register-form__rules">
                            <p>Tôi đã đọc và đồng ý với <a className="rule" href="">Điều khoản dịch vụ</a> và <a className="sec" href="">Bảo mật</a></p>
                        </div>
                    </div>
                    <Button className="Register-form__button" type='submit' variant="contained" disableElevation>Đăng ký</Button>
                </form>
            </Formik>
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