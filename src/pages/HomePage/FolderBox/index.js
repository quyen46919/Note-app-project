import { AccessTime, AccountCircle, FolderShared, FolderSpecial, MoreHoriz, MoreVert } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from 'utils/formatDate';
import './styles.scss';

function FolderBox(props) {
    const { data, isLined } = props;
    const convertedDate = formatDate(data.lastUpdated);

    return (
        <Link className="folder-box__link" to={`/home/${data.id}`}>
            { isLined ?
                <motion.div
                    className="folder-row"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
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
            Cập nhật lần cuối vào {convertedDate}
                    </div>
                    <div className="folder-row__users">
                        <AccountCircle className="folder-row__icon"/>
                        <AccountCircle className="folder-row__icon"/>
                        <AccountCircle className="folder-row__icon"/>
                    </div>
                    <div className="folder-row__more-vertical">
                        <MoreVert />
                    </div>
                </motion.div> :
                <motion.div
                    className="folder-box"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
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
                            Được tạo vào {convertedDate}
                        </div>
                    </div>
                </motion.div>}
        </Link>
    );
}

export default FolderBox;