/**
 * 权限相关的中间件;
 */

// 导入jsonwebtoken;
const jwt = require('jsonwebtoken');
// 导入全局常量;
const { JWT_SECRET } = require('../config/config.default');
// 导入鉴权相关的错误类型;
const { tokenExpiredError, jsonWebTokenError } = require('../constant/auth.err.type')
//判断用户token是否正确
const auth = async (ctx, next) => {
  // 获取用户请求头中的token;
  const { authorization } = ctx.request.header;
  // 截取所需字段;
  const token = authorization.replace('Bearer ', '');
  try {
    // 对用户发送的token进行校验并提取相关信息;
    const user = jwt.verify(token, JWT_SECRET);
    // 把获取到的信息进行挂载;
    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        console.error('token已过期', error);
        ctx.app.emit('error', tokenExpiredError, ctx);
        return;
      case 'JsonWebTokenError':
        console.error('无效的token', error);
        ctx.app.emit('error', jsonWebTokenError, ctx);
        return;
    };
  };
  // 放行;
  await next();
};

// 导出;
module.exports = {
  auth
};