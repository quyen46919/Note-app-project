import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from 'assets/events';
import './styles.scss';

function formatVNDate(datetime) {
    var date = datetime.toJSON().slice(0, 10);
    return date.slice(8, 10) + '/'
            + date.slice(5, 7) + '/'
            + date.slice(0, 4);
}

function UpcomingEvent({ event }) {
    const startTime = formatVNDate(event.start);
    const endTime = formatVNDate(event.end);

    return (
        <div className="upcoming-event">
            <div className="upcoming-event__time">
                <div className="upcoming-event__circle" style={{ backgroundColor: `${event.color}` }}></div>
                <p style={{ color: `${event.color}` }}>{ `${startTime} - ${endTime}` }</p>
            </div>
            <div className="upcoming-event__title">
                {event.title}
            </div>
        </div>
    );
}

function CalendarPage() {
    const localizer = momentLocalizer(moment);
    const [eventsList, setEventsList] = useState([]);
    let now = new Date();

    useEffect(() => {
        setEventsList(events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleSelect({ start, end }) {
        const title = window.prompt('New Event name');
        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        if (title) {
            var newEvent = {
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
                start: start,
                end: end,
                title: title,
                color: `#${randomColor}`
            };
            setEventsList([...eventsList, newEvent]);
        }
    }

    return (
        <div className="calendar-page">
            <div className="calendar-page__upcoming-event">
                <h3>Sự kiện đang diễn ra</h3>
                <div className="calendar-page__list">
                    {
                        eventsList.filter((event) => event.end.getTime() >= now.getTime() )
                            .sort((a, b) => a.end.getTime() - b.end.getTime())
                            .map((event) => <UpcomingEvent key={event.id} event={event} />)
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
            ></Calendar>
        </div>
    );
}

export default CalendarPage;