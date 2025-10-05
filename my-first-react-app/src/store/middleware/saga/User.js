import {useDispatch, useSelector} from "react-redux";
import { fetchUser } from "./userSlice";

export default function User() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector(state => state.user);

  const handleFetchUser = () => dispatch(fetchUser(2));

  return (
    <div>
      <button onClick={handleFetchUser}>Загрузить</button>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "success" && user && <p>{user.name}</p>}
      {status === "failed" && <p>Ошибка: {error}</p>}
    </div>
  )
}
