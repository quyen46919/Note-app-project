import { Button, TextField } from '@mui/material';
import React from 'react';
import './styles.scss';

function SmallTab() {
    return (
        <div className="small-tab">
            <TextField
                label=""
                variant="outlined"
                value="Hoàng Hữu Nghĩa"
                className="small-tab__name"
            />
            <div className="small-tab__title">
                <h3>Giới thiệu</h3>
            </div>
            <TextField
                fullWidth
                label=""
                variant="outlined"
                value=""
                multiline
                placeholder="Giới thiệu bản thân bạn..."
                rows={3}
                maxRows={3}
            />
            <div className="small-tab__title">
                <h3>Thông tin cá nhân</h3>
            </div>
            <div className="small-tab__content">
                <div className="small-tab__list">
                    {/* <h4>Ngày tham gia</h4> */}
                    <TextField
                        label="Ngày tham gia"
                        variant="outlined"
                        value="Tháng 8, 2021"
                    />
                </div>
                <div className="small-tab__list">
                    <TextField
                        label="Sinh nhật"
                        variant="outlined"
                        value="31 tháng 01"
                    />
                </div>
                <div className="small-tab__list">
                    <TextField
                        label="Quê quán"
                        variant="outlined"
                        value="Phú Yên"
                    />
                </div>
                <div className="small-tab__list">
                    <TextField
                        label="Địa chỉ"
                        variant="outlined"
                        value="Đà Nẵng"
                    />
                </div>
            </div>
            <div className="small-tab__title">
                <h3>Thông tin liên lạc</h3>
            </div>
            <div className="small-tab__content">
                <div className="small-tab__list">
                    <TextField
                        label="Số điện thoại"
                        variant="outlined"
                        value="0343547418"
                    />
                </div>
                <div className="small-tab__list">
                    <TextField
                        label="Email"
                        variant="outlined"
                        value="huunghia45511@donga.edu.vn"
                    />
                    <h4></h4>
                    <p></p>
                </div>
            </div>
            <Button type="submit" variant="outlined" size="large">
                Cập nhật
            </Button>
        </div>
    );
}

export default SmallTab;