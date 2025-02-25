// filepath: /koa-starter/koa-starter/src/config/index.js

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
};

export default config;