# Koa 入门教程

## TL；DR

Koa 是一个强大的 web 框架，提供了简洁的 API 和强大的中间件机制。包括创建应用、使用中间件、路由和错误处理。

## 什么是 Koa？

Koa 是一个新的 web 框架，由 Express 原班人马打造，旨在成为 web 应用和 API 的一个更小、更富有表现力、更健壮的基石。Koa 利用 async 函数，帮助你丢弃回调函数，并大大提升错误处理的效率。

## 安装 Koa

首先，你需要安装 Node.js 和 npm。然后在你的项目目录下运行以下命令来安装 Koa：

```bash
npm install koa
```

## 创建一个简单的 Koa 应用

创建一个新的文件 index.js，并添加以下代码：

```js
import Koa from 'koa';
const app = new Koa();

// 中间件
app.use(async ctx => {
  ctx.body = 'Hello, Koa!';
});

// 启动服务器
app.listen(3000, () => {
  console.log('服务器已启动，监听在 http://localhost:3000');
});
```

运行以下命令启动服务器：

```bash
node index.js
```

打开浏览器，访问 `http://localhost:3000`，你应该会看到 "Hello, Koa!"。

## 使用中间件

Koa 的中间件是一个 async 函数，可以通过 `app.use` 方法来使用。中间件可以做很多事情，比如处理请求、响应、错误等。

```js
app.use(async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url}`);
  await next();
});
```

## 路由

Koa 本身不带路由功能，但可以使用 `koa-router` 来实现。首先安装 `koa-router`：

```bash
npm install koa-router
```

然后在 index.js 中使用 `koa-router`：

```js
import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Hello, Koa!';
});

router.get('/api/items', async (ctx) => {
  ctx.body = { items: ['item1', 'item2'] };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('服务器已启动，监听在 http://localhost:3000');
});
```

## 处理错误

Koa 提供了一个简单的错误处理机制。你可以使用 `try...catch` 块来捕获错误，并设置响应状态码和消息。

```js
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});
```


今天，用koa建一个稍微完整一点的服务
