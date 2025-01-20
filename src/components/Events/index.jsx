

import EventItem from "./componentes/EventItem";
import data from '../../data/events.json';

console.log(data);

// const events = data._embedded.events;

//Object destructing
const { _embedded: {events}} = data;

const Events = () => {

    const eventsComponent = events.map((eventItem) => 
        (
            <EventItem 
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
            />
        ));

    return (
        <div>
            Eventos
            {eventsComponent}
            {/* <EventItem /> */}
        </div>
    );
};

export default Events;