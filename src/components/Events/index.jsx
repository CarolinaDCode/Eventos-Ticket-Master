import EventItem from "./componentes/EventItem";
import data from '../../data/events.json';

console.log(data);

// const events = data._embedded.events;

//Object destructing
const { _embedded: {events}} = data;

const Events = () => {
    return (
        <div>
            Eventos
            <EventItem />
        </div>
    );
};

export default Events;