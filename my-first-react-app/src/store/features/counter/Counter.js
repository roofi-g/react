import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "./actions";

export default function Counter() {
  // const [count, setCount] = useState(0);
  const count = useSelector(state => state.counter.count); // получаем данные из store (хранилище данных)
  const dispatch = useDispatch(); // изменение данных

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Уменьшить</button>
    </div>
  )
}
