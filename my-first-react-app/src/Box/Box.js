function Box({ children }) {
  return (
    <div style={{border: '1px solid grey', margin: '10px'}}>
      {children}
    </div>
  )
}

function List({ children }) {
  return (
    <>
      <ul>{children()}</ul>
    </>
  )
}

export default function AppBox() {

  let a = 'dfdf';
  let b = 'dfddsfdf';

  return (
    <>
      <List>{() => <li>{a}</li>}</List>
      <List>{() => <li>{b}</li>}</List>
      <Box>
        <p>Text</p>
      </Box>
      <Box>
        <div style={{color: 'red', height: '100px'}}>text 2</div>
      </Box>
    </>
  )
}
