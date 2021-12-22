import React from 'react';
import NoteTable from './NoteTable';
import './styles.scss';

function BoardPage({ match }) {

    return (
        <div className="board-page">
            <NoteTable id={match.params.noteId}/>
        </div>
    );
}

export default BoardPage;