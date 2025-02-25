// filepath: /koa-starter/koa-starter/src/middlewares/errorHandler.js

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    };
    ctx.app.emit('error', err, ctx);
  }
};