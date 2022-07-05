/**
 * 地址相关的中间件;
 */

// 导入鉴权相关的错误类型;


//导入地址相关的错误类型;
const { addrParameterError } = require('../constant/addr.err.type')


//判断地址参数是否正确;
const addrValidator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules);
    } catch (error) {
      console.error('地址数据格式错误', error);
      addrParameterError.result = error;
      ctx.app.emit('error', addrParameterError, ctx);
      return;
    };
    await next();
  };
};
// 导出;
module.exports = {
  addrValidator
};