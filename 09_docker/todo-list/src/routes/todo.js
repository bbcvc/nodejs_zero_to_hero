import Router from '@koa/router';
import todoController from '../controllers/todo.js';

const router = new Router({ prefix: '/api/todos' });

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.toggleTodo);
router.delete('/:id', todoController.deleteTodo);

export default router; 
