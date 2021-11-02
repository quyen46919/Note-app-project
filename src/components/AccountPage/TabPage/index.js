import dummy from 'assets/images/dummy-img.png';
import avatar from 'assets/images/intro-ChauPhat.jpg';
import React from 'react';
import AccountTabPanel from '../AccountTabPanel';
import './styles.scss';

function TabPage() {

    return (
        <div className="tab-page">
            <div className="tab-page__left">
                <div className="tab-page__avatar"
                    style={{ backgroundImage: `url("${avatar}")` }}
                />
                <div className="tab-page__dummy">
                    <img src={dummy} alt="dummy" />
                </div>
            </div>
            <div className="tab-page__right">
                <div className="tab-page__name">
                    <h3>Nguyễn Châu Phát</h3>
                    <p>Designer</p>
                </div>
                <div className="tab-page__tabs">
                    <AccountTabPanel/>
                </div>
            </div>
        </div>
    );
}

export default TabPage;
