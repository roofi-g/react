import {useSelector} from "react-redux";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const todos = useSelector(state => state.todoList.todos);

  return (
    <ul style={{
      marginTop: '20px',
      padding: '10px',
      listStyleType: 'none',
      border: '1px solid rgb(103, 58, 183)',
    }}>
      {
        todos.map(elem => <ToDoItem key={elem.id} elem={elem}/>)
      }
    </ul>
  )
}
