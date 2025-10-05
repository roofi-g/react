import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchUser } from "./userSlice";
import {fetchPost} from "./postSlice";

export default function User() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector(state => state.user);

  const handleFetch = () => dispatch(fetchUser(1));

  return (
    <div>
      <button onClick={handleFetch}>Загрузить</button>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "success" && user && <p>{user.name}</p>}
      {status === "error" && <p>Ошибка: {error}</p>}
    </div>
  )
}
