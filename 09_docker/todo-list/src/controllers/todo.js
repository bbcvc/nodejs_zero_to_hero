import Todo from '../models/todo.js';

export default {
  async getAllTodos(ctx) {
    try {
      const todos = await Todo.findAll();
      ctx.body = { success: true, data: todos };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, error: error.message };
    }
  },

  async createTodo(ctx) {
    try {
      const { title } = ctx.request.body;
      if (!title) {
        ctx.status = 400;
        ctx.body = { success: false, error: 'Title is required' };
        return;
      }
      const id = await Todo.create(title);
      ctx.status = 201;
      ctx.body = { success: true, data: { id, title } };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, error: error.message };
    }
  },

  async toggleTodo(ctx) {
    try {
      const { id } = ctx.params;
      const { completed } = ctx.request.body;
      await Todo.update(id, completed);
      ctx.body = { success: true };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, error: error.message };
    }
  },

  async deleteTodo(ctx) {
    try {
      const { id } = ctx.params;
      await Todo.delete(id);
      ctx.body = { success: true };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, error: error.message };
    }
  }
}; 
