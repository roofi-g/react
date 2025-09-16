import {useState} from "react";

function Content(props) {
  return <div style={{height: '100px', backgroundColor: props.theme === 'light' ? 'yellow' : 'blue' }}>Block</div>
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light'); // "light" или "dark"

  return (
    <>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >Переключить тему интерфейса</button>
      <Content theme={theme} />
    </>
  )
}
