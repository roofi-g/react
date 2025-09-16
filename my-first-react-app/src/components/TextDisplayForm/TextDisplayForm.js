import {Box, Button, Card, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function TextDisplayForm() {
  const [value, setValue] = useState("");
  const [element, setElement] = useState([
    {id: 0, text: "Рандомный текст"},
    {id: 1, text: "Рандомный текст 2"}
  ]);

  function addElement() {
    setElement([...element, {id: element.length, text: value}]);
    setValue('');
  }

  return (
    <Box>
      <TextField
        label={"Введите текст"}
        fullWidth
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button variant="outlined" onClick={addElement}>Отобразить текст</Button>
      <Card variant="outlined">
        {element.map((el) =>
          <Typography
            variant="h5"
            sx={{
              margin: '10px',
              bgcolor: '#f5f5f5'
            }}
            key={el.id}
          >
            {el.text}
          </Typography>
        )}
      </Card>
    </Box>
  )
}
