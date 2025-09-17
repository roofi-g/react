import './TodoList.css'
const {useState} = require("react");

function TodoList() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {id: 1, text: 'Новая заметка'}
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const addElementInList = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setItems([...items, {id: items.length + 1, text: value}]);
    setValue('')
  }

  function deleteElementFromList(element) {
    setItems(prevItems => prevItems.filter(el => el.id !== element.id))
  }

  return(
    <div className={"todoList"}>
      <form>
        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={addElementInList}>Добавить</button>
      </form>
      <ul>
        {items.map(el => <li key={el.id}>{el.id}. {el.text} <button onClick={() => deleteElementFromList(el)}>Удалить</button></li>)}
      </ul>
    </div>
  );
}

export default TodoList;
