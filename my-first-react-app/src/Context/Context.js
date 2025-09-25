import React, {useContext, useState} from "react";

export const UserContext = React.createContext({name: 'Гость'});
export const ThemeContext = React.createContext({theme: 'light'});

function Header() {
  const contextValue = useContext(UserContext);
  return <h1>Hello {contextValue.name}</h1>
}

function Profile({ tag, toChangeData, toChangeTheme, valueName, onChangeName, valueAge, onChangeAge }) {
  const contextValue = useContext(UserContext);

  function renderData(label, value, onChange, contextValue) {
    return (
      <p>
        {label}:
        {
          tag === 'p' ?
            <input
              style={{marginLeft: '5px'}}
              value={value}
              onChange={(e) => onChange(e.target.value)}/> :
            <span> {contextValue}</span>
        }
      </p>
    )
  }

  return (
    <>
      {renderData('Name', valueName, onChangeName, contextValue.name)}
      {renderData('Age', valueAge, onChangeAge, contextValue.age)}

      <button onClick={toChangeData}>to Change Data</button>
      <br/><br/>
      <button onClick={toChangeTheme}>to Change Theme in Footer</button>
    </>
  )
}

function Footer() {
  const contextValue = useContext(ThemeContext);
  return <p style={{backgroundColor: contextValue.theme === 'light' ? 'pink' : 'blue'}}>© {new Date().getFullYear()}</p>
}

export default function AppContext() {
  let [tag, setTag] = useState('');
  // изменения темы и имени пользователя
  const [theme, setTheme] = useState('light');
  let [name, setName] = useState('Roofi');
  const [age, setAge] = useState(27);

  const funcs = {
    toChangeData: () => setTag(tag === 'p' ? 'input' : 'p'),
    toChangeTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  }

  return (
    <>
      <UserContext.Provider value={{name: name, age: age}}>
        <Header/>
        <Profile
          tag={tag}
          {...funcs}
          valueName={name}
          onChangeName={setName}
          valueAge={age}
          onChangeAge={setAge} />
      </UserContext.Provider>
      <ThemeContext.Provider value={{theme: theme}}>
        <Footer/>
      </ThemeContext.Provider>
    </>
  )
}
