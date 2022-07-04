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
  };
  // 下架商品;
  async removeGoods(id) {
    const res = await GoodsModel.destroy({ where: { id } });
    return res > 0 ? true : false;
  };
  // 上架商品;
  async restoreGoods(id) {
    const res = await GoodsModel.restore({ where: { id } });
    return res > 0 ? true : false;
  };
  // 获取商品列表;
  async findGoods(pageNum, pageSize) {
    // 获取具体的分页数据,count:总数,offset:偏移量, limit:每页条数;
    //具体https://www.sequelize.com.cn/core-concepts/model-querying-finders;
    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await GoodsModel.findAndCountAll({ offset: offset, limit: pageSize * 1 })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    };
  };
};
// 实例化并导出;
module.exports = new GoodsService();