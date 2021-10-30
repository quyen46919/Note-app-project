import React from 'react';
import NoteTable from './NoteTable';
import './styles.scss';

function NotePage({ match }) {

    return (
        <div className="note-page">
            <NoteTable id={match.params.noteId}/>
        </div>
    );
}

export default NotePage;