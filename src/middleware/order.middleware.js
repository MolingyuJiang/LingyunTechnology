/**
 * 订单相关的中间件;
 */
// 导入订单相关的错误类型;
const { orderParameterError } = require('../constant/order.err.type');
// 订单参数校验;
const orderValidator = (rules) => {
  return async (ctx, next) => {
    try {
      await ctx.verifyParams(rules);
    } catch (error) {
      console.error('订单数据格式错误', error);
      orderParameterError.result = error;
      ctx.app.emit('error', orderParameterError, ctx);
      return;
    };
    await next();
  };
};



// 导出;
module.exports = {
  orderValidator
};