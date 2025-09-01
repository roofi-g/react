import {useEffect, useRef, useState} from "react";

function Timer() {
  const initialValue = 0;
  const [time, setTime] = useState(initialValue);

  const [active, setActive] = useState(false);
  // const stopRef = useRef(false);

  useEffect(() => {
    if (!active) return;
    // if (stopRef.current) return;
    console.log('⏰ ')

    function onTimeout() {
      setTime(time => time + 1);
    }
    const timeoutId = setInterval(onTimeout, 1000);
    setTimeout(() => { clearInterval(timeoutId) }, 5000);

    return () => {
      clearInterval(timeoutId);
    };
  }, [time, active]);

  return(
    <div>
      <p>{time}</p>
      <button onClick={() => setActive(true)}>Старт</button>
      <button onClick={() => setActive(false)}>Стоп</button>
      {/*<button onClick={() => stopRef.current = true}>Стоп</button>*/}
      <button onClick={() => setTime(initialValue)}>Очистить</button>
    </div>
  );
}

export default Timer;
