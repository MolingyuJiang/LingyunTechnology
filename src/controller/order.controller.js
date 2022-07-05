// 订单相关的控制器;
// 导入订单相关数据库相关操作;
const { createOrder } = require('../service/order.service')
// 导入错误类型;
const { addOrderError } = require('../constant/order.err.type')
class OrderController {
  // 新建订单;
  async addOrder(ctx, next) {
    // 获取用户ID;
    const user_id = ctx.state.user.id;
    // 解析用户请求信息中的参数;
    const { address_id, goods_info, total } = ctx.request.body;
    // 订单编号,使用时间戳;
    const order_number = 'lingyun' + Date.now();
    try {
      const res = await createOrder({
        user_id,
        address_id,
        goods_info,
        total,
        order_number
      });
      ctx.body = {
        code: 0,
        message: '创建订单成功',
        result: res
      }
    } catch (error) {
      console.error('创建订单失败', error);
      ctx.app.emit('error', addOrderError, ctx);
      return;
    };
  };


};
// 实例化并导出;
module.exports = new OrderController();
/**
 * 此文件是订单相关的控制器;
 */