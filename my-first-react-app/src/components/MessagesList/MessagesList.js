import {useState} from "react";
import {Box, Paper, Stack, Typography} from "@mui/material";

function MessagesList() {
  const [message, setMessage] = useState([
    {id: 1, text: 'Привет! Как дела?', sender: 'other'},
    {id: 2, text: 'Привет! Всё хорошо, как твои дела?', sender: 'me'},
    {id: 3, text: 'Отлично!', sender: 'other'}
  ]);

  return (
    <Paper elevation={4} sx={{height: 200, bgcolor: "#f5f5f5", padding: "30px"}}>
      <Stack spacing={2} sx={{flexGrow: 1}}>
        {message.map(message => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              justifyContent: message.sender === "me" ? "flex-end" : "flex-start",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 1.5,
                borderRadius: 3,
                maxWidth: "70%",
                bgcolor: message.sender === "me" ? "#1976d2" : "#e0e0e0",
                color: message.sender === "me" ? "white" : "black"
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
            </Paper>
          </Box>
        ))}
      </Stack>
    </Paper>
  )
}
export default MessagesList;
