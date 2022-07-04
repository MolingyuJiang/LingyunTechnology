/**
 * 购物车相关的中间件;
 */
// 导入购物车相关的错误类型;
const { } = require('../constant/cart.err.type');
// 导入商品相关的错误类型;
const { invalidGoodsID } = require('../constant/goods.err.type');
// 购物车参数校验;
const cartValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_id: { type: 'number', required: true },
    })
  } catch (error) {
    console.error('无效的商品ID', error);
    cartParameterError.result = error;
    ctx.app.emit('error', invalidGoodsID, ctx);
    return;
  };
  await next();
};





// 导出;
module.exports = {
  cartValidator
};