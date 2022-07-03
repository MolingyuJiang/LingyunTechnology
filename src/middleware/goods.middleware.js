/**
 * 商品相关的中间件;
 */
const { goodsParameterError } = require('../constant/goods.err.type');
// 导入商品相关的错误类型;
// 参数校验;
const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_name: { type: 'string', required: true },
      goods_price: { type: 'number', required: true },
      goods_number: { type: 'number', required: true },
      goods_image: { type: 'string', required: true }
    })
  } catch (error) {
    console.error('商品参数错误', error);
    goodsParameterError.result = error;
    ctx.app.emit('error', goodsParameterError, ctx);
    return;
  };
  await next();
}



// 导出;
module.exports = {
  validator
};