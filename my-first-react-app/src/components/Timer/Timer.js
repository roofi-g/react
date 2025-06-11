import {useEffect} from "react";
const {useState} = require("react");

function Timer() {
  const [time, setTime] = useState(0);

  const start = () => {
    setTime(time + 1);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      // setTime(time + 1);
    }, 1000);
    // return () => {
    //   clearInterval(timer);
    // }
  });
  return(
    <div>
      <p>{time}</p>
      <button onClick={start}>Старт</button>
      <button>Стоп</button>
      <button>Очистить</button>
    </div>
  );
}

export default Timer;
