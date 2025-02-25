import Router from 'koa-router';
import * as todoController from '../controllers/itemController.js';

const router = new Router({ prefix: '/api' });

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

export default router;
