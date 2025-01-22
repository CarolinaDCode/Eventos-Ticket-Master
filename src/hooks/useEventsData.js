import { useState } from 'react';
import eventJSON from '../data/events.json';

const useEventsData = () => {
    const [data] = useState(eventJSON);
    const { _embedded: { events }} = data;

    return {
        events
    }
};

export default useEventsData;