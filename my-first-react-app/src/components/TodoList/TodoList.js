import './TodoList.css'
const {useState} = require("react");

function TodoList() {
  const [value, setValue] = useState('');
  const [elem, setElem] = useState([
    {text: 'Новая заметка'}
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const addElementInList = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setElem([...elem, {text: value}]);
    setValue('')
  }
  return(
    <div className={"todoList"}>
      <form>
        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={addElementInList}>Добавить</button>
      </form>
      <ul>
        {elem.map(el => <li>{el.text}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
