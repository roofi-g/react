import {useDispatch} from "react-redux";
import { addProduct } from "./productsSlice";
import Form from "./Form";

export default function ProductCreate() {
  const dispatch = useDispatch();

  const sendData = (name, description, price, available) => {
    dispatch(addProduct({id: Date.now(), name, description, price, available}));
  }

  return (
    <div style={{
      width: '350px',
      border: '1px solid red',
      margin: 'auto',
      padding: '20px'
    }}>
      <h2>Данные нового продукта</h2>
      <Form onSendData={sendData} buttonLabel={'Добавить в каталог'}/>
    </div>
  )
}
