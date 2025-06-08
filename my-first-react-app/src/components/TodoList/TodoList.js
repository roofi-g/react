const {useState} = require("react");

function TodoList() {
  const [value, setValue] = useState();
  const [elem, setElem] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const addElementInList = () => {
    setElem(value);
  }
  return(
    <div>
      <input type="text" value={value} onChange={handleChange}/>
      <button onClick={addElementInList}>Добавить</button>
      <p>{elem}</p>
    </div>
  );
}

export default TodoList;
