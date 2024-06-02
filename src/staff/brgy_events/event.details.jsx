import React from 'react';
import { useEventContext } from '../../hooks/context/useEventContext';

const EventDetails = () => {
    const { event } = useEventContext();

    return (
        <div>
            <h3>Event Details</h3>
            <p>ID: {event !== null ? event.event_id : ''}</p>
            <p>Name: {event !== null ? event.event_name : ''}</p>
            <p>Details: {event !== null ? event.details : ''}</p>
         
        </div>
    );
};

export default EventDetails;
