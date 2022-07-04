// 购物车相关的控制器;
// 导入购物车相关数据库相关操作;
const { createOrUpdateCart } = require('../service/cart.service')
// 导入购物车相关的错误类型;
const { addCartError } = require('../constant/cart.err.type');
// 导入商品相关的错误类型;
const { } = require('../constant/goods.err.type');
class CartController {
  // 添加购物车;
  async addCart(ctx, next) {
    // 获取用户登录后挂载的用户ID;
    const user_id = ctx.state.user.id;
    // 获取用户请求信息中的参数;
    const goods_id = ctx.request.body.goods_id;
    try {
      const res = await createOrUpdateCart(user_id, goods_id);
      ctx.body = {
        code: 0,
        message: '添加购物车成功',
        result: res
      }
    } catch (error) {
      console.error('添加购物车失败', error);
      ctx.app.emit('error', addCartError, ctx);
      return;
    };
  };



};
// 实例化并导出;
module.exports = new CartController();
/**
 * 此文件是商品相关的控制器;
 */