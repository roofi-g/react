import './App.css';
import CurrentTime from './components/CurrentTime/CurrentTime';
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import TodoList from "./components/TodoList/TodoList";
import Timer from "./components/Timer/Timer";
import CommentsList from "./components/CommentsList/CommentsList";
import MessagesList from "./components/MessagesList/MessagesList";
import TextDisplayForm from "./components/TextDisplayForm/TextDisplayForm";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ToDo from "./components/TodoList/TodoList";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import AppBox from "./Box/Box";
import AppRouter from "./router/AppRouter";
import AppContext from "./Context/Context";
import AppHoc from "./HOC/Hoc";
import CounterRedux from "./store/features/counter/Counter";
import AppStore from "./store/AppStore";
import Api from "./api/api";

function App() {
  return (
    <div className="App">
      <Greeting name="React" />
      <CurrentTime />
      {/*<Counter />*/}
      {/*<TextInput />*/}
      <Timer />
      {/*<AppBox />*/}
      {/*<TemperatureConverter />*/}
      {/*<ToDo />*/}
      {/*<CommentsList />*/}
      {/*<MessagesList />*/}
      {/*<TextDisplayForm />*/}
      {/*<ThemeSwitcher />*/}

      {/*<AppRouter />*/}
      {/*<AppContext />*/}
      {/*<AppHoc />*/}
      {/*<AppStore />*/}
      <Api />
    </div>
  );
}

function Greeting(props) {
  const currentTime = new Date().getHours();
  let currentTimeOfDay = 'Добрый утро!';
  if (currentTime > 10 && currentTime < 18) currentTimeOfDay = 'Добрый день!';
  if (currentTime > 18 && currentTime < 22) currentTimeOfDay = 'Добрый вечер!';
  if (currentTime > 22 || currentTime < 3) currentTimeOfDay = 'Доброй ночи!';
  return (
    <div className="Greeting">
      <h1>Привет, {props.name}!</h1>
      <p> {currentTimeOfDay} </p>
    </div>
  );
}

export default App;
