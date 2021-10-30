import React from 'react';
import NoteTable from './NoteTable';
import './styles.scss';

function NotePage() {
    return (
        <div className="note-page">
            <NoteTable/>
        </div>
    );
}

export default NotePage;