
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

};
// 实例化并导出;
module.exports = new OrderService();