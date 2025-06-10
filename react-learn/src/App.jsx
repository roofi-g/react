import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [textMassage, setTextMassage] = useState([
    "Привет!",
    "Как дела?"
  ]);
  const [text, setText] = useState();

  function printText(e) {
    setText(e.target.value)
  }
  function addText(e) {
    e.preventDefault();
    setTextMassage([...textMassage, text])
  }
  const data = textMassage.map(massage => <div>{massage}</div>)

  return (
    <div>
      <p>{ data }</p>
      <form onSubmit={addText}>
        <input className="input-data" value={text} type="text" onChange={printText}/>
        <input type="submit" value="Добавить"/>
      </form>
    </div>
  )
}

export default App;
