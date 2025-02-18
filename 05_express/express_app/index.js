// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('./public')); // 静态文件目录

// 数据存储（模拟数据库）
let todos = [];
let idCounter = 1;

// 路由
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: idCounter++,
    title: req.body.title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const updatedTodo = todos.find(todo => todo.id === todoId);
  
  if (updatedTodo) {
    updatedTodo.completed = !updatedTodo.completed;
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === todoId);
  
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`启动了，监听本地 ${port} 端口`);
});
