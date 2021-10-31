import { AccessTime, AccountCircle, FolderShared, FolderSpecial, MoreHoriz, MoreVert } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function FolderBox(props) {
    const { data, isLined } = props;

    return (
        <Link className="folder-box__link" to={`/home/${data.id}`}>
            { isLined ? <div className="folder-row">
                <div className="folder-row__content">
                    <div className="folder-row__line">
                        {data.isFavorited ? <FolderSpecial className="folder-box__special"/> : <FolderShared className="folder-box__shared"/>}
                    </div>
                    <div className="folder-row__title">
                        {data.title}
                    </div>
                </div>
                <div className="folder-row__subtitle">
                    <AccessTime />
                    Cập nhật lần cuối vào {data.lastUpdate}
                </div>
                <div className="folder-row__users">
                    <AccountCircle className="folder-row__icon"/>
                    <AccountCircle className="folder-row__icon"/>
                    <AccountCircle className="folder-row__icon"/>
                </div>
                <div className="folder-row__more-vertical">
                    <MoreVert />
                </div>
            </div> : <div className="folder-box">
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
            </div>}
        </Link>
    );
}

export default FolderBox;