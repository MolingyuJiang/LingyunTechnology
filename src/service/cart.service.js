// 商品相关的数据库操作;
// 导入用户数据库模型对象;
const CartModel = require('../model/cart.model');

class CartService {
  // 添加和更新购物车;
  async createOrUpdateCart(user_id, goods_id) {


    return {
      id,
      user_id,
      goods_id,
      number,
      selected: true
    }
  };

};
// 实例化并导出;
module.exports = new CartService();