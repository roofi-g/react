import {useDispatch, useSelector} from "react-redux";
import { click, block } from "./PracticeSlice";

export default function Practice() {
  const count = useSelector(state => state.practice.count); // получаем данные из store (хранилище данных)
  const dispatch = useDispatch(); // изменение данных

  return (
    <div>
      <button onClick={() => dispatch(click())}>click</button>
      <button onClick={() => dispatch(block())}>block</button>
    </div>
  )
}
