import './CurrentTime.css';
import {useEffect, useState} from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="CurrentTime">
      <p>Текущее время: {time.toLocaleTimeString()} </p>
    </div>
  );
}
export default CurrentTime;
