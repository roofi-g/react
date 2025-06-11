import {useEffect} from "react";
const {useState} = require("react");

function Timer() {
  const [time, setTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1)
    }, 1000);
    return () => {
      if (time === 0) clearInterval(timer);
    }
  }, [time]);
  return(
    <div>
      <p>{time}</p>
      {/*<button onClick={start}>Старт</button>*/}
      {/*<button>Стоп</button>*/}
      {/*<button>Очистить</button>*/}
    </div>
  );
}

export default Timer;
