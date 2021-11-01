import React from 'react';
import maintenance from 'assets/images/maintenance.png';
import './styles.scss';

function EmptyPage() {
    return (
        <div className="empty-page">
            <img src={maintenance} alt="empty page image" />
        </div>
    );
}

export default EmptyPage;