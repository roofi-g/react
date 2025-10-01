import {useState} from "react";
import {useDispatch} from "react-redux";
import { addProduct } from "./productsSlice";

export default function ProductCreate() {
  const [name, setName] = useState('Название');
  const [description, setDescription] = useState('Описание');
  const [price, setPrice] = useState('1000');
  const [available, setAvailable] = useState('2');

  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim() || !price.trim() || !available.trim()) return;

    dispatch(addProduct({id: Date.now(), name, description, price, available}));

    // setName('');
    // setDescription('');
    // setPrice('');
    // setAvailable('');
  }

  const style_div = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  }
  return (
    <div style={{
      width: '350px',
      border: '1px solid red',
      margin: 'auto',
      padding: '20px'
    }}>
      <h2>Данные нового продукта</h2>
      <form action="" onSubmit={sendData}>
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
        <button type="submit">Добавить в каталог</button>
      </form>
    </div>
  )
}
