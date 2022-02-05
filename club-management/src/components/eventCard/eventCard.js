import React from 'react';
import './eventCard.css'

const EventCard = ({ event }) => {
    return (
        <>
            <div className="eventCardComp">
                <div className="lineCardEvent">
                </div>
                <div className="eventCardContent">
                <h1>{event.title}</h1>
                <h2>Event by : {event.eventby}</h2>
                <img src="" alt="" />
                <div className="startDate">
                    <p>Event starts at : <span>{event.start}</span></p>
                </div>
                <div className="endDate">
                    <p>Event ends at : <span>{event.end}</span></p>
                </div>
                </div>
            </div>
        </>
    );
};

export default EventCard;