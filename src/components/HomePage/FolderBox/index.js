import { AccessTime, AccountCircle, FolderShared, FolderSpecial, MoreHoriz } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function FolderBox(props) {
    const { data } = props;

    return (
        <Link className="folder-box__link" to={`/home/${data.id}`}>
            <div className="folder-box">
                <div className="folder-box__more">
                    <MoreHoriz />
                </div>
                <div className="folder-box__line">
                    {data.isFavorited ? <FolderSpecial className="folder-box__special"/> : <FolderShared className="folder-box__shared"/>}
                    <div className="folder-box__users">
                        <AccountCircle className="folder-box__icon"/>
                        <AccountCircle className="folder-box__icon"/>
                        <AccountCircle className="folder-box__icon"/>
                    </div>
                </div>
                <div className="folder-box__content">
                    <div className="folder-box__title">
                        {data.title}
                    </div>
                    <div className="folder-box__subtitle">
                        <AccessTime />
                        Cập nhật lần cuối vào {data.lastUpdate}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FolderBox;