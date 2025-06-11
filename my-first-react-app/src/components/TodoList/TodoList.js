const {useState} = require("react");

function TodoList() {
  const [value, setValue] = useState('');
  const [elem, setElem] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const addElementInList = (e) => {
    e.preventDefault();
    console.log(value.trim())
    if (!value.trim()) return;
    setElem([...elem, {text: value}]);
    setValue('')
  }

  return(
    <div>
      <form onClick={addElementInList}>
        <input type="text" value={value} onChange={handleChange}/>
        <button>Добавить</button>
      </form>
      <ul>
        {elem.map(el => <li>{el.text}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
