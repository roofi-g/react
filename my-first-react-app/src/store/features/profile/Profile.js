import {useDispatch, useSelector} from "react-redux";
import { updateName, updateMail } from "./profileSlice";
import { useState } from "react";

export default function Profile() {
  const name = useSelector(state => state.profile.name); // получаем данные из store (хранилище данных)
  const mail = useSelector(state => state.profile.mail);
  const dispatch = useDispatch(); // изменение данных

  let [change, setChange] = useState(false);
  const [inputName, setInputName] = useState();
  const [inputMail, setInputMail] = useState();

  function changeData() {
    setChange(change !== true);
    dispatch(updateName(inputName));
    dispatch(updateMail(inputMail));
  }

  function showData() {
    return (
      <div>
        <p>Ваше имя: {name}</p>
        <p>Ваша почта: {mail}</p>
        <button onClick={changeData}>Изменить данные</button>
      </div>
    )
  }

  function updateData() {
    return (
      <form>
        <input required style={{margin: '5px'}} placeholder={'Новое имя'} value={inputName} onChange={(e) => setInputName(e.target.value)}/><br/>
        <input required type={'email'} style={{margin: '5px'}} placeholder={'Новая почта'} value={inputMail} onChange={(e) => setInputMail(e.target.value)}/><br/>
        <button onClick={changeData}>Изменить данные</button>
      </form>
    )
  }

  return (
    <div>
      {
        change ? updateData() : showData()
      }
    </div>
  )
}
