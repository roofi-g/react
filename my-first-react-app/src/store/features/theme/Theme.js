import {useDispatch, useSelector} from "react-redux";
import { toggleTheme } from "./themeSlice";

export default function Theme() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>Переключить тему</button>
      <p style={{color: theme === 'light' ? 'pink' : 'red'}}>Тема</p>
    </div>
  )
}
