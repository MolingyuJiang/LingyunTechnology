
// 导入sequelize; 
const { Op } = require('sequelize')
// 导入订单数据库模型对象;
const OrderModel = require('../model/order.model');

class OrderService {
  // ---创建订单---;
  async createOrder(order) {
    const res = await OrderModel.create(order);
    return res;
  };

  //---获取订单列表---;
  async findAllOrder(pageNum, pageSize, order_state) {
    const { count, rows } = await OrderModel.findAndCountAll({
      attributes: ['goods_info', 'total', 'order_number', 'order_state'],
      where: {
        order_state
      },
      offset: (pageNum - 1) * pageSize,
      limit: pageSize * 1
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  };

  //---修改订单状态---;
  async updateOrder(id, order_state) {
    console.log(id, order_state)
    const res = await OrderModel.update(
      { order_state },
      { where: { id } });
    return res;
  };

};
// 实例化并导出;
module.exports = new OrderService();