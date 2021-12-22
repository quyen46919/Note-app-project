/* eslint-disable indent */
import { Email, Lock, Person } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import { login, register } from 'apiCall/auth';
import logo from 'assets/images/logo.png';
import bg from 'assets/images/travel.jpg';
import { AuthContext } from 'context/AuthContext';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import './styles.scss';

function AccountPage() {
    const isLargeScreen = useMediaQuery('(min-width: 768px)');
    const [isLogin, setIsLogin] = useState(true);
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        setIsLogin(!isLogin);
    };

    const loginSchema = Yup.object().shape({
        username: Yup.string().required('Thông tin này là bắt buộc'),
        password: Yup.string()
            .min(8, 'Mật khẩu quá ngắn!')
            .max(50, 'Mật khẩu quá dài!')
            .required('Thông tin này là bắt buộc')
    });

    const registerSchema = Yup.object().shape({
        username: Yup.string().min(6, 'Ít nhất 6 ký tự').max(30, 'Tối đa 30 ký tự').required('Thông tin này là bắt buộc'),
        email: Yup.string().email('Email không hợp lệ').required('Thông tin này là bắt buộc'),
        password: Yup.string()
            .min(8, 'Mật khẩu quá ngắn!')
            .max(50, 'Mật khẩu quá dài!')
            .required('Thông tin này là bắt buộc')
    });

    return (
        <div className="account">
            <div className="account__left">
                <div className="account__header">
                    <img src={logo} alt="logo" />
                </div>
                {
                    isLogin ? <div className="account__login-form">
                        <h3 className="account__title">Đăng nhập</h3>
                        <p>Đăng nhập ngay với tài khoản Google hoặc Đông Á</p>
                        <Formik
                            key={1}
                            initialValues={{ username: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={(values, actions) => {
                                login(values)
                                    .then((res) => {
                                        actions.setSubmitting(false);
                                        enqueueSnackbar('Đăng nhập thành công', {
                                            variant: 'success'
                                        });
                                        dispatch({ type: 'LOGIN_SUCCESS', payload: res });
                                        history.push('/');
                                    })
                                    .catch((err) => {
                                        actions.setSubmitting(false);
                                        enqueueSnackbar(err.response.data.message || 'Đăng nhập thất bại', {
                                            variant: 'error'
                                        });
                                    });
                            }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form className="account__text-fields" onSubmit={handleSubmit}>
                                <TextField
                                    autoFocus
                                    autoComplete="true"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Email/></InputAdornment>
                                    }}
                                    placeholder="Tên đăng nhập"
                                    type="text"
                                    className="account__gray-bg"
                                    spellCheck="false"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.username && touched.username)}
                                />
                                { touched.username && errors.username &&
                                    <p className="account__show-error">{touched.username && errors.username}</p>
                                }
                                <TextField
                                    autoComplete="true"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>
                                    }}
                                    placeholder="Mật khẩu"
                                    className="account__gray-bg"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={Boolean(touched.password && touched.password)}
                                />
                                { touched.password && errors.password &&
                                    <p className="account__show-error">{touched.password && errors.password}</p>
                                }
                                <div className="account__line">
                                    <FormControlLabel
                                        control={
                                            <Checkbox defaultChecked sx={{
                                                color: '#36C857',
                                                '&.Mui-checked': {
                                                    color: '#36C857'
                                                }
                                            }}/>
                                        }
                                        label="Lưu đăng nhập"
                                        spellCheck="false"
                                    />
                                    <NavLink to="#" onClick={handleClick}>
                                        Quên mật khẩu
                                    </NavLink>
                                </div>
                                <Button
                                    fullWidth
                                    className="account__button account__submit"
                                    variant="contained"
                                    type="submit"
                                    disableElevation
                                    disabled={isSubmitting}
                                    onSubmit={handleSubmit}
                                >
                                    Đăng nhập
                                </Button>
                            </form>
                        )}
                        </Formik>
                        {/* <div className="account__space">
                            <span>Hoặc</span>
                        </div>
                        <div className="account__line">
                            <Button variant="outlined" startIcon={<Google />} fullWidth className="account__button account__gray-bg">
                                Google
                            </Button>
                            <Button variant="outlined" startIcon={<School />} fullWidth className="account__button account__gray-bg">
                                Đông Á
                            </Button>
                        </div> */}
                        <div className="account__redirect">
                            Bạn chưa có tài khoản? &nbsp;
                            <NavLink to="/account" onClick={handleClick}>
                                Đi đến đăng ký
                            </NavLink>
                        </div>
                    </div> : <div className="account__register-form">
                        <h3 className="account__title">Đăng ký</h3>
                        <p>Đăng nhập ngay với các bước đơn giản</p>
                        <Formik
                            key="register-form"
                            initialValues={{ username: '', password: '', email: '', check: true }}
                            validationSchema={registerSchema}
                            onSubmit={(values, actions) => {
                                console.log(values);
                                if (values.check === false) {
                                    enqueueSnackbar('Bạn phải chấp nhận điều khoản sử dụng', {
                                        variant: 'error'
                                    });
                                    actions.setSubmitting(false);
                                    return;
                                }

                                delete values.check;
                                register(values)
                                    .then((res) => {
                                        console.log(res);
                                        actions.setSubmitting(false);
                                        enqueueSnackbar('Đăng ký thành công', {
                                            variant: 'success'
                                        });
                                        dispatch({ type: 'LOGIN_SUCCESS', payload: res });
                                        history.push('/');
                                        enqueueSnackbar('Đã đăng nhập bằng tài khoản vừa đăng ký', {
                                            variant: 'info'
                                        });
                                    })
                                    .catch((err) => {
                                        console.log(err.response.data);
                                        actions.setSubmitting(false);
                                        enqueueSnackbar(err?.response.data.message || 'Đăng ký thất bại', {
                                            variant: 'error'
                                        });
                                    });
                            }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form className="account__text-fields" onSubmit={handleSubmit}>
                                <TextField
                                    autoFocus
                                    autoComplete="true"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Person/></InputAdornment>
                                    }}
                                    placeholder="Tên đăng nhập"
                                    type="text"
                                    className="account__gray-bg"
                                    spellCheck="false"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.username && touched.username)}
                                />
                                { touched.username && errors.username &&
                                    <p className="account__show-error">{touched.username && errors.username}</p>
                                }
                                <TextField
                                    autoComplete="true"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>
                                    }}
                                    placeholder="Mật khẩu"
                                    type="password"
                                    className="account__gray-bg"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.password && touched.password)}
                                />
                                { touched.password && errors.password &&
                                    <p className="account__show-error">{touched.password && errors.password}</p>
                                }
                                <TextField
                                    autoComplete="true"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Email/></InputAdornment>
                                    }}
                                    placeholder="Email"
                                    type="email"
                                    className="account__gray-bg"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.email && touched.email)}
                                />
                                { touched.email && errors.email &&
                                    <p className="account__show-error">{touched.email && errors.email}</p>
                                }
                                <div className="account__line">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handleChange}
                                                checked={values.check || false}
                                                sx={{
                                                    color: '#36C857',
                                                    '&.Mui-checked': {
                                                        color: '#36C857'
                                                    }
                                            }}/>
                                        }
                                        name="check"
                                        label="Tôi đã đọc và chấp nhận điều khoản sử dụng của trang web này"
                                        spellCheck="false"
                                    />
                                </div>
                                <Button
                                    fullWidth
                                    className="account__button account__submit"
                                    variant="contained"
                                    disableElevation
                                    type="submit"
                                    disabled={isSubmitting}
                                    onSubmit={handleSubmit}
                                >
                                    Đăng ký
                                </Button>
                            </form>
                        )}
                        </Formik>
                        <div className="account__redirect">
                            Bạn đã có tài khoản? &nbsp;
                            <NavLink to="/account" onClick={handleClick}>
                                Đi đến đăng nhập
                            </NavLink>
                        </div>
                    </div>
                }
                <span>2021 - All rights reserved by Chisetro</span>
            </div>
            { isLargeScreen && <div className="account__right" style={{ backgroundImage: `url('${bg}')` }}></div> }
        </div>
    );
}

export default AccountPage;