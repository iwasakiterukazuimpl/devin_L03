const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

let todos = [];
let nextId = 1;

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  
  if (!text || typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'Todo text is required and must be a non-empty string' });
  }
  
  const newTodo = {
    id: nextId++,
    text: text.trim(),
    createdAt: new Date().toISOString()
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`TODO API server running on http://localhost:${PORT}`);
});
