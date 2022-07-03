// 商品相关的数据库操作;
// 导入用户数据库模型对象;
const GoodsModel = require('../model/goods.model');

class GoodsService {
  // 添加商品;
  async createGoods(goods) {
    const res = await GoodsModel.create(goods);
    return res.dataValues;
  };
  // 更改商品;
  async updateGoods(id, goods) {
    const res = await GoodsModel.update(goods, { where: { id } });
    return res[0] > 0 ? true : false;
  }




};
// 实例化并导出;
module.exports = new GoodsService();