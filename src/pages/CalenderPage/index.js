import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { addNewEvent, deleteEvent, fetchAllEvents } from 'apiCall/event.api';
import ConfirmPopup from 'components/ConfirmPopup';
import { AuthContext } from 'context/AuthContext';
import { cloneDeep } from 'lodash';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { formatDate } from 'utils/formatDate';
import './styles.scss';
import PropTypes from 'prop-types';

UpcomingEvent.propTypes = {
    event: PropTypes.object.isRequired,
    handleDeleteEvent: PropTypes.func.isRequired
};

function UpcomingEvent(props) {
    const { event, handleDeleteEvent } = props;
    const startTime = formatDate(event.start);
    const endTime = formatDate(event.end);

    return (
        <div className="upcoming-event">
            <div className="upcoming-event__time">
                <div className="upcoming-event__circle" style={{ backgroundColor: `${event.color}` }}></div>
                <p style={{ color: `${event.color}` }}>{ `${startTime} - ${endTime}` }</p>
            </div>
            <div className="upcoming-event__title">
                {event.title}
            </div>
            <IconButton size="small" className="upcoming-event__delete" onClick={() => handleDeleteEvent(event.id)}>
                <Close/>
            </IconButton>
        </div>
    );
}

function CalendarPage() {
    const localizer = momentLocalizer(moment);
    const [eventsList, setEventsList] = useState([]);
    const { nottableUser } = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    const [confirm, setConfirm] = useState(false);
    const [deleteEventId, setDeleteEventId] = useState('');

    useEffect(() => {
        fetchAllEvents(nottableUser.id)
            .then((res) => {
                setEventsList(res);
            })
            .catch(() => {
                enqueueSnackbar('L???y d??? li???u s??? ki???n th???t b???i', {
                    variant: 'error'
                });
            });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleSelect({ start, end }) {
        let title = window.prompt('Nh???p s??? ki???n:');
        if (!title) return;
        const cloneEventList = cloneDeep(eventsList);

        var newEvent = {
            owner: nottableUser.id,
            start: start,
            end: end,
            title: title,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        };

        addNewEvent(newEvent)
            .then((res) => {
                setEventsList(prevEvent => [...prevEvent, res]);
                enqueueSnackbar('T???o m???i s??? ki???n th??nh c??ng', {
                    variant: 'success'
                });
            })
            .catch(() => {
                setEventsList(cloneEventList);
                enqueueSnackbar('T???o m???i s??? ki???n th???t b???i', {
                    variant: 'error'
                });
            });
    }

    const handleClosePopup = () => {
        setConfirm(false);
    };
    const handleConfirm = () => {
        let cloneEventList = cloneDeep(eventsList);

        let filterList = cloneEventList.filter((event) => event.id !== deleteEventId);
        setEventsList(filterList);

        deleteEvent(deleteEventId)
            .then(() => {
                enqueueSnackbar('???? x??a s??? ki???n', {
                    variant: 'success'
                });
            })
            .catch(() => {
                setEventsList(cloneEventList);
                enqueueSnackbar('X??a s??? ki???n th???t b???i', {
                    variant: 'error'
                });
            });

        setConfirm(false);
    };

    const handleDeleteEvent = (id) => {
        setDeleteEventId(id);
        setConfirm(true);
    };

    return (
        <div className="calendar-page">
            <div className="calendar-page__upcoming-event">
                <h3>S??? ki???n ??ang di???n ra</h3>
                <div className="calendar-page__list">
                    {
                        eventsList.length ? eventsList
                            .sort((a, b) => new Date(a.end) - new Date(b.end))
                            .map((event) => <UpcomingEvent key={event.id} event={event} handleDeleteEvent={handleDeleteEvent}/>)
                            :
                            <div className="calendar-page__no-event">
                                Danh s??ch s??? ki???n r???ng
                            </div>
                    }
                </div>
            </div>
            <Calendar
                selectable
                localizer={localizer}
                events={eventsList}
                defaultView={Views.MONTH}
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date()}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={handleSelect}
            />
            {confirm &&
            <ConfirmPopup
                open={confirm}
                handleClosePopup={handleClosePopup}
                handleConfirm={handleConfirm}
                title='B???n c?? th???c s??? mu???n x??a s??? ki???n n??y'
                content='S??? ki???n n??y s??? b??? x??a ??i v?? kh??ng th??? ph???c h???i'
            />}
        </div>
    );
}

export default CalendarPage;