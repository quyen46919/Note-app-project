import { AccessTime, AccountCircle, FolderSpecial, MoreHoriz } from '@mui/icons-material';
import React from 'react';
import './styles.scss';

function FolderBox(props) {
    return (
        <div className="folder-box">
            <div className="folder-box__more">
                <MoreHoriz />
            </div>
            <div className="folder-box__line">
                <FolderSpecial className="folder-box__special"/>
                <div className="folder-box__users">
                    <AccountCircle className="folder-box__icon"/>
                    <AccountCircle className="folder-box__icon"/>
                    <AccountCircle className="folder-box__icon"/>
                </div>
            </div>
            <div className="folder-box__content">
                <div className="folder-box__title">
                    Công việc cần làm 
                </div>
                <div className="folder-box__subtitle">
                    <AccessTime />
                    Đã chỉnh sửa lần cuối: 3 ngày trước
                </div>
            </div>
        </div>
    );
}

export default FolderBox;