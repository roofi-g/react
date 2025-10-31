import {useEffect, useState} from "react";

export default function Api() {
  let [data, setData] = useState([]);

  // const click = () => {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(res => res.json())
  //     .then(data => console.log(data.value))
  //     .catch(err => console.log(err))
  // }

  //
  // async function click() {
  //   try {
  //     const response = await fetch('http://localhost:3005/products');
  //     const dataRandom = await response.json();
  //     setData(dataRandom)
  //   } catch (e) {
  //     console.log(e.message + ' err')
  //   }
  // }

  return (
    <div>
      <button onClick={click}>random</button>
      {data.map(el => (
        <div key={el.id}>
          <img src={el.image} alt=""/>
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  )
}
