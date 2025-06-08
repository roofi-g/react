import {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  }
  return(
    <div>
      <p>{count}</p>
      <button onClick={upCount}>Увеличить число</button>
    </div>
  );
}

export default Counter;
