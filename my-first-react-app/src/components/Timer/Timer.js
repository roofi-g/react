const {useState} = require("react");

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

export default Timer;
