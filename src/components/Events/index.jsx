
import { useState } from "react";
import useEventsData from '../../hooks/useEventsData';
import EventItem from "./componentes/EventItem";
import eventJSON from '../../data/events.json';
import data from '../../data/events.json';

// const events = data._embedded.events;

const Events = ({ searchValue }) => {

    const {events, isLoading, error} = useEventsData();
    // const [data] = useState(eventJSON);
    // const { _embedded: {events}} = data;

    const handleEventItemClick = (id) =>{
        console.log('evento clickeando:', id);
    }

    if(error) {
        return <div>Ha ocurrido un error</div>;
    }

    if(isLoading) {
        return <div>Cargando resultados ...</div>;
    }

    const renderEvents = () => {

        let eventsFiltered = events;

        if(typeof searchValue !== 'undefined'){
            if (searchValue.length > 0){
                let txtTolowerCase = searchValue.toLowerCase();
                eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(txtTolowerCase));
            }
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
        </div>
    );
};

export default Events;