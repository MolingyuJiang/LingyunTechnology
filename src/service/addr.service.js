// 地址相关的数据库操作;

// 导入sequelize; 
const { Op } = require('sequelize')

// 导入地址数据库模型对象;

class AddrService {
  // ---添加和更新购物车---;
  async createOrUpdateCart(user_id, goods_id) {
    // 根据user_id和goods_id同时进行查找数据;
    let res = await CartModel.findOne({
      where: {
        [Op.and]: {
          user_id,
          goods_id
        }
      }
    });
    // 如果存在数据,sequelize的递增;
    if (res) {
      await res.increment('number');
      return await res.reload();
    } else {
      // 如果不存在数据,则创建数据;
      return await CartModel.create({
        user_id,
        goods_id
      });
    };
  };


};
// 实例化并导出;
module.exports = new AddrService();