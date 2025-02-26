import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';
import todoRouter from './routes/todo.js';
import Todo from './models/todo.js';

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 3000;

// 初始化数据库表
Todo.createTable().catch(console.error);

app.use(bodyParser());
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 
