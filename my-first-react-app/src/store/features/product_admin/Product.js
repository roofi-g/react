import { useDispatch } from "react-redux";
import {deleteProduct, updateDataProduct} from "./productsSlice";
import { useState } from "react";
import Form from "./Form";

export default function Product({ product }) {
  let [show, setShow] = useState(true);

  const dispatch = useDispatch();

  const sendData = (name, description, price, available) => {
    setShow(show = !show);
    dispatch(updateDataProduct({product: product.id, name, description, price, available}));
  }

  return (
    <div style={{
      border: '1px solid red',
      padding: '10px'
    }}>
      {show ? (
        <>
          <div>
            <h3>{ product.name }</h3>
            <p>{ product.description }</p>
            <p>Цена: { product.price } руб</p>
            <p>Количество: { product.available }</p>
          </div>
          <button onClick={() => setShow(false)}>Редактировать</button>
        </>
      ) : (
        <Form onSendData={sendData} buttonLabel={'Сохранить'} product={product}/>
      )}
      <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
    </div>
  )
}
