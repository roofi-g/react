import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Message(props) {
  return (
    <div>
      <p>{props.message.text} <span>{props.message.author}</span></p>
    </div>
  )
}

function App() {
  const [messageList, setMessageList] = useState([
    {id: 1, text: "Привет!", author: "Roofi"},
    {id: 2, text: "Привет!", author: "Roofi"}
  ]);
  const [text, setText] = useState();

  function printText(e) {
    setText(e.target.value)
  }
  function addText(e) {
    e.preventDefault();
    const newMessage = {
      text,
      author: ''
    }
    setMessageList([...messageList, newMessage])
  }

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <div>
      <p>{ messageList.map(message =>
        <Message message={message} key={message.id}/>
      )}
      </p>
      <form onSubmit={addText}>
        <input className="input-data" value={text} type="text" onChange={printText}/>
        <input type="submit" value="Добавить"/>
      </form>
    </div>
  )
}

export default App;
