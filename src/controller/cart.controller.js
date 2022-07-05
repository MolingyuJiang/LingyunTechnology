// 购物车相关的控制器;
// 导入购物车相关数据库相关操作;
const { createOrUpdateCart, findAllCartList, updateCart, removeCart, selectAllCart, unSelectAllCart } = require('../service/cart.service');
// 导入购物车相关的错误类型;
const { addCartError, cartParameterError, invalidCartID, changeCartError, removeCartError, selectAllCartError, unSelectAllCartError } = require('../constant/cart.err.type');
// 导入商品相关的错误类型;
const { } = require('../constant/goods.err.type');
class CartController {
  // ---添加购物车---;
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

  // ---获取用户购物车列表---;
  //具体:https://www.sequelize.com.cn/core-concepts/assocs;
  async cartList(ctx, next) {
    // 解析用户请求信息中的参数;
    const { pageNum = 1, pageSize = 10 } = ctx.request.query;
    try {
      const res = await findAllCartList(pageNum, pageSize);
      ctx.body = {
        code: 0,
        message: '获取购物车列表成功',
        result: res
      }
    } catch (error) {

    }
  };

  //---更新购物车---;
  async changeCart(ctx, next) {
    // 解析用户请求信息中的参数;
    const { id } = ctx.request.params;
    const { number, selected } = ctx.request.body;
    try {
      if (number === undefined && selected === undefined) {
        cartParameterError.message = 'number和selected不能同时为空';
        ctx.app.emit('error', cartParameterError, ctx);
        return;
      }
      const res = await updateCart({ id, number, selected });
      if (res) {
        ctx.body = {
          code: 0,
          message: '更新购物车成功',
          result: res
        }
      } else {
        console.error('无效的购物车ID', id);
        ctx.app.emit('error', invalidCartID, ctx);
        return;
      }
    } catch (error) {
      console.error('更新购物车失败', error);
      ctx.app.emit('error', changeCartError, ctx);
      return;
    }
  };

  // ---删除购物车---;
  async delCart(ctx, next) {
    // 解析用户请求信息中的参数;
    const { ids } = ctx.request.body;
    try {
      const res = await removeCart(ids);
      ctx.body = {
        code: 0,
        message: '删除购物车成功',
        result: res
      }
    } catch (error) {
      console.error('删除购物车失败', error);
      removeCartError.result = ids;
      ctx.app.emit('error', removeCartError, ctx);
      return;
    }
  };

  // ---购物车全选---;
  async selectAll(ctx, next) {
    // 获取用户ID(在用户登录以后会挂载到全局);
    const user_id = ctx.state.user.id;
    try {
      const res = await selectAllCart(user_id);
      ctx.body = {
        code: 0,
        message: '购物车全选成功',
        result: res
      }
    } catch (error) {
      console.error('全选失败', error);
      ctx.app.emit('error', selectAllCartError, ctx);
      return;
    }
  };

  // ---购物车全不选---;
  async unSelectAll(ctx, next) {
    // 获取用户ID(在用户登录以后会挂载到全局);
    const user_id = ctx.state.user.id;
    try {
      const res = await unSelectAllCart(user_id);
      ctx.body = {
        code: 0,
        message: '购物车全不选成功',
        result: res
      }
    } catch (error) {
      console.error('全选失败', error);
      ctx.app.emit('error', unSelectAllCartError, ctx);
      return;
    }
  };


};
// 实例化并导出;
module.exports = new CartController();
/**
 * 此文件是商品相关的控制器;
 */