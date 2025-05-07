import './EventCard.css';

// function EventCard(props) {
//   return (
//     <div className="EventCard">
//       <h2>{props.name}</h2>
//       <p>Дата проведения: {props.date}</p>
//       <p>Место проведения: {props.location}</p>
//     </div>
//   );
// }

function EventCard({name, date, location}) { // деструктуризация
  return (
    <div className="EventCard">
      <h2>{name}</h2>
      <p>Дата проведения: {date}</p>
      <p>Место проведения: {location}</p>
    </div>
  );
}

export default EventCard;
