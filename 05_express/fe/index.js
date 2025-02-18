const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

const url = 'http://localhost:3000/api/todos';

// 获取所有 Todo
async function getTodos() {
  const response = await fetch(url);
  return await response.json();
}

// 添加 Todo
async function addTodo(title) {
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
}

// 更新 Todo
async function updateTodo(id) {
  await fetch(`${url}/${id}`, {
    method: 'PUT'
  });
}

// 删除 Todo
async function deleteTodo(id) {
  await fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
}

// 渲染 Todo 列表
async function renderTodos() {
  const todos = await getTodos();
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const item = document.createElement('div');
    item.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    item.textContent = todo.title;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.onclick = async () => {
      await updateTodo(todo.id);
      renderTodos();
    };
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = async () => {
      await deleteTodo(todo.id);
      renderTodos();
    };
    
    item.prepend(checkbox);
    item.append(deleteButton);
    todoList.appendChild(item);
  });
}

// 添加 Todo 按钮点击事件
addTodoButton.addEventListener('click', async () => {
  const title = todoInput.value.trim();
  if (title) {
    await addTodo(title);
    todoInput.value = '';
    renderTodos();
  }
});

// 初始化
document.addEventListener('DOMContentLoaded', renderTodos);
