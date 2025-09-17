import './TodoList.css'
import {Button, Box, TextField, ListItem, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const {useState} = require("react");

function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const addElement = (e) => {
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  }

  return (
    <Box component="section">
      <TextField
        size="small"
        label={"Сделать..."}
        sx={{marginRight: '10px'}}
        value={value}
        onChange={(event) => setValue(event.target.value)}/>
      <Button variant="outlined" onClick={addElement}>Добавить</Button>
    </Box>
  );
}

function TodoItem({item, onDelete}) {
  return (
    <ListItem>
      {item.id}. {item.text}
      <IconButton
        aria-label="delete"
        onClick={() => onDelete(item)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

function TodoList({ items, onDelete }) {
  return (
    <>
      {items.map(el => <TodoItem key={el.id} item={el} onDelete={onDelete} />)}
    </>
  );
}

export default function ToDo() {
  const [items, setItems] = useState([
    {id: 1, text: 'Новая заметка'}
  ]);

  const addElementInList = (value) => {
    setItems([...items, {id: items.length + 1, text: value}]);
  }
  const deleteElementFromList = (element) => {
    setItems(prevItems => prevItems.filter(el => el.id !== element.id))
  }

  return(
    <div className={"todoList"}>
      <TodoInput onAdd={addElementInList} />
      <TodoList items={items} onDelete={deleteElementFromList} />
    </div>
  );
}
