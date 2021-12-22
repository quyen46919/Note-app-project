import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import './styles.scss';

const useStyles = makeStyles(() => ({
    headerButtonIcon: {
        backgroundColor: '#fff!important',
        width: '28px!important',
        height: '28px!important',
        borderRadius: '8px'
    },
    headerIcon: {
        fontSize: '18px!important'
    }
}));

function CardNote(props) {
    const classes = useStyles();
    const { card, removeCard } = props;

    return (
        <div className="card-note">
            <div className="card-note__header">
                <p className="card-note__title">{card.title ? card.title : ''}</p>
                <IconButton size="small" className={classes.headerButtonIcon} onClick={() => removeCard(card.id)}>
                    <Close className={classes.headerIcon}/>
                </IconButton>
            </div>
            {card.cover && <img src={card.cover} alt={card.title}/>}
            {card.content && <p className="card-note__content">{card.content}</p>}
        </div>
    );
}

export default CardNote;