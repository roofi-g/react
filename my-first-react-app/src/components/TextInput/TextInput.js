const {useState} = require("react");

function TextInput() {
  const [value, setValue] = useState('ghhghh');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return(
    <div>
      <input type="text" value={value} onChange={handleChange}/>
      <p>{value}</p>
    </div>
  );
}

export default TextInput;
