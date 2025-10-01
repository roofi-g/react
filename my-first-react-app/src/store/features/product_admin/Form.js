import {useState} from "react";

export default function Form({ onSendData, buttonLabel, product }) {
  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price.toString());
  const [available, setAvailable] = useState(product?.available.toString());

  const style_div = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  }

  const sendData = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim() || !price.trim() || !available.trim()) return;
    onSendData(name, description, price, available);

    // setName('');
    // setDescription('');
    // setPrice('');
    // setAvailable('');
  }
  return (
    <form onSubmit={sendData}>
      <div style={style_div}>
        <label>Название товара:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
      </div>
      <div style={style_div}>
        <label>Описание товара:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <div style={style_div}>
        <label>Цена:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}/>
      </div>
      <div style={style_div}>
        <label>Количество:</label>
        <input
          type="text"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}/>
      </div>
      <button type="submit">{buttonLabel}</button>
    </form>
  )
}
