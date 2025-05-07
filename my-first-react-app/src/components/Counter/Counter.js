import {useState} from "react";

function Timer() {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return(
    <div>
      <p>{value}</p>
    </div>
  );
}
// function TodoList() {
//   const [value, setValue] = useState();
//   const [elem, setElem] = useState();
//
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }
//
//   const addElementInList = () => {
//     setElem(value);
//   }
//   return(
//     <div>
//       <input type="text" value={value} onChange={handleChange}/>
//       <button onClick={addElementInList}>Добавить</button>
//       <p>{elem}</p>
//     </div>
//   );
// }

// function TextInput() {
//   const [value, setValue] = useState('ghhghh');
//
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }
//   return(
//     <div>
//       <input type="text" value={value} onChange={handleChange}/>
//       <p>{value}</p>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//
//   const upCount = () => {
//     setCount(count + 1);
//   }
//   return(
//     <div>
//       <p>{count}</p>
//       <button onClick={upCount}>Увеличить число</button>
//     </div>
//   );
// }

export default Timer;
// export default TodoList;
// export default TextInput;
// export default Counter;
