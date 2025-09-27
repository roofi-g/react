import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./counterSlice";

export default function Counter() {
  const count = useSelector(state => state.counter.count); // получаем данные из store (хранилище данных)
  const dispatch = useDispatch(); // изменение данных

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
    </div>
  )
}
