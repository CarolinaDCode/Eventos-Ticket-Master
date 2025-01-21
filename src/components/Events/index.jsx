
import { useState } from "react";
import EventItem from "./componentes/EventItem";
import eventJSON from '../../data/events.json';
import data from '../../data/events.json';

// const events = data._embedded.events;

const Events = ({ searchTerm }) => {

    const [data] = useState(eventJSON);

    //Object destructing
    const { _embedded: {events}} = data;

    const handleEventItemClick = (id) =>{
        console.log('evento clickeando:', id);
    }

    const renderEvents = () => {

        let eventsFiltered = events;

        if (searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem 
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id = {eventItem.id}
            />
        ))
    };

    return (
        <div>
            Eventos
            {renderEvents()}
            {/* <EventItem /> */}
        </div>
    );
};

export default Events;