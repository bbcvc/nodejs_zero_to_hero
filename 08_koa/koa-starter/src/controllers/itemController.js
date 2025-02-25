// 模拟数据存储
let todos = [];
let idCounter = 1;

export const getAllTodos = async (ctx) => {
  ctx.body = todos;
};

export const createTodo = async (ctx) => {
  const { title } = ctx.request.body;
  if (!title) {
    ctx.throw(400, '标题不能为空');
  }

  const newTodo = {
    id: idCounter++,
    title,
    completed: false,
    createdAt: new Date()
  };

  todos.push(newTodo);
  ctx.status = 201;
  ctx.body = newTodo;
};

export const updateTodo = async (ctx) => {
  const id = parseInt(ctx.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    ctx.throw(404, '待办事项未找到');
  }

  const { completed } = ctx.request.body;
  todo.completed = completed;
  ctx.body = todo;
};

export const deleteTodo = async (ctx) => {
  const id = parseInt(ctx.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    ctx.throw(404, '待办事项未找到');
  }

  todos.splice(index, 1);
  ctx.status = 204;
};
