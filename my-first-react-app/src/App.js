import './App.css';
import CurrentTime from './components/CurrentTime/CurrentTime';
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import TodoList from "./components/TodoList/TodoList";
import Timer from "./components/Timer/Timer";
import CommentsList from "./components/CommentsList/CommentsList";

function App() {
  return (
    <div className="App">
      <Greeting />
      <CurrentTime />
      {/*<Counter />*/}
      {/*<TextInput />*/}
      <TodoList />
      {/*<Timer />*/}
      <CommentsList />
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
