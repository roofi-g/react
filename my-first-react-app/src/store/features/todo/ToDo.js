import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

export default function ToDo() {
  return (
    <div style={{
      width: '400px',
      backgroundColor: 'aliceblue',
      border: '2px solid #03A9F4',
      padding: '20px',
    }}>
      <ToDoInput />
      <ToDoList />
    </div>
  )
}
