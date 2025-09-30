import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./toDoSlice";

export default function ToDoInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const addElement = () => {
    if (!value.trim()) return;
    dispatch(addTodo(value));
    setValue('');
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <input
        type="text"
        style={{
          width: '70%',
          height: '20px'
        }}
        placeholder={'Описание задачи'}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={addElement}>Добавить</button>
    </div>
  )
}
