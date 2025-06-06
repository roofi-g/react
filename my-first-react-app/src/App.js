import logo from './logo.svg';
import './App.css';
import CurrentTime from './components/currentTime/CurrentTime';
import EventCard from './components/eventCard/EventCard';
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Greeting />
      <CurrentTime />
      <Counter />
      {/*<EventCard name='Свадьба' date='13 май' location='Челябинск'/>*/}
      {/*<EventCard name='Юбилей' date='17 июнь' location='Екатеринбург'/>*/}
    </div>
  );
}

function Greeting() {
  const currentTime = new Date().getHours();
  let currentTimeOfDay = 'Добрый утро!';
  if (currentTime > 10 && currentTime < 18) currentTimeOfDay = 'Доброе день!';
  if (currentTime > 18 && currentTime < 22) currentTimeOfDay = 'Добрый вечер!';
  if (currentTime > 22 || currentTime < 3) currentTimeOfDay = 'Доброй ночи!';
  return (
    <div className="Greeting">
      <h1>Привет, React!</h1>
      <p> {currentTimeOfDay} </p>
    </div>
  );
}

export default App;
