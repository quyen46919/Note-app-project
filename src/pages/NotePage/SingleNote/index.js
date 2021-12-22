import { Close } from '@mui/icons-material';
import React from 'react';
import './styles.scss';

function SingleNote(props) {
    const { note, handleDeleteNote } = props;

    return (
        <div className="single-note">
            <Close className="single-note__actions" onClick={() => handleDeleteNote(note.id)}/>
            <div className="single-note--title">
                {note.title}
            </div>
            <div className="single-note--content">
                {note.content}
            </div>
        </div>
    );
}

export default SingleNote;