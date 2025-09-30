import {useDispatch, useSelector} from "react-redux";
import {checked, deleteTodo} from "./toDoSlice";

export default function ToDoItem(props) {
  const dispatch = useDispatch();

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{display: 'flex'}}>
        <input
          type="checkbox"
          style={{marginRight: '10px'}}
          checked={props.elem.isCompleted}
          onChange={() => dispatch(checked({id: props.elem.id, isCompleted: props.elem.isCompleted}))}
        />
        <p>{props.elem.description}</p>
      </div>
      <button onClick={() => dispatch(deleteTodo(props.elem.id))}>Удалить</button>
    </li>
  );
}
