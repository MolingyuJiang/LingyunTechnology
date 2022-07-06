// 订单相关的控制器;
// 导入订单相关数据库相关操作;
const { createOrder, findAllOrder, updateOrder } = require('../service/order.service')
// 导入错误类型;
const { addOrderError, orderListError, changeOrderError } = require('../constant/order.err.type')
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

  // 获取订单列表;
  async orderList(ctx, next) {
    // 解析用户请求信息中的参数;
    const { pageNum = 1, pageSize = 10, status = 0 } = ctx.request.query;
    try {
      const res = await findAllOrder(pageNum, pageSize, status);
      ctx.body = {
        code: 0,
        message: '获取订单列表成功',
        result: res
      };
    } catch (error) {
      console.error('获取订单列表失败', error);
      ctx.app.emit('error', orderListError, ctx);
      return;
    };
  };

  // 更改订单;
  async changeOrder(ctx, next) {
    // 获取订单ID;
    const id = ctx.request.params.id;
    // 解析用户请求信息中的参数;
    const order_state = ctx.request.body;
    try {
      const res = await updateOrder(id, order_state);
      ctx.body = {
        code: 0,
        message: '修改订单状态成功',
        result: res
      };
    } catch (error) {
      console.error('修改订单状态失败', error);
      ctx.app.emit('error', changeOrderError, ctx);
      return;
    };
  };



};
// 实例化并导出;
module.exports = new OrderController();
/**
 * 此文件是订单相关的控制器;
 */