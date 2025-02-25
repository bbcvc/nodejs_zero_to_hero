import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import errorHandler from './middlewares/errorHandler.js';
import todoRoutes from './routes/api.js';
import config from './config/index.js';

const app = new Koa();
const router = new Router();

// 中间件
app.use(bodyParser());
app.use(errorHandler);

// 路由
app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

// 启动服务器
app.listen(config.port, () => {
  console.log(`服务器已启动，监听在 http://localhost:${config.port}`);
});

export default app;
