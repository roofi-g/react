import {useDispatch, useSelector} from "react-redux";
import { startTimer, stopTimer, reset } from "./timerSlice";

export default function Timer() {
  const value = useSelector(state => state.timer.value); // получаем данные из store (хранилище данных)
  const dispatch = useDispatch(); // изменение данных

  return (
    <div>
      <p>{ value }</p>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(stopTimer())}>Stop</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
