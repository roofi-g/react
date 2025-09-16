import {useState} from "react";
import Button from "@mui/material/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  }
  const downCount = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <p>{count}</p>
      <Button variant="container" onClick={upCount}>Увеличить число</Button>
      <Button onClick={downCount}>Уменьшить число</Button>
    </div>
  );
}

export default Counter;
