// 商品相关的数据库操作;

// 导入sequelize; 
const { Op } = require('sequelize')
// 导入购物车数据库模型对象;
const CartModel = require('../model/cart.model');
// 导入商品数据库模型对象;
const GoodsModel = require('../model/goods.model')
class CartService {
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

  // ---获取用户购物车列表---;
  async findAllCartList(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await CartModel.findAndCountAll({
      // 设置查找字段;
      attributes: ['id', 'number', 'selected'],
      offset: offset,
      limit: pageSize * 1,
      //指定关联;
      include: {
        //指定关联的数据库模型;
        model: GoodsModel,
        //指定查询到的数据别名;
        as: 'goods_info',
        //指定需要的字段;
        attributes: ['id', 'goods_name', 'goods_price', 'goods_image']
      }
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  };

  // ---更新购物车---;
  async updateCart(params) {
    const { id, number, selected } = params;
    const res = await CartModel.findByPk(id);
    // 如果没有找到数据;
    if (!res) return '';
    // 使用新的数量覆盖数据库原有数量;
    number !== undefined ? (res.number = number) : '';
    selected !== undefined ? (res.selected = selected) : '';
    // 更新数据并返回新数据;
    return await res.save();
  };

  // ---删除购物车---;
  //使用sequelize的destroy方法进行批量删除;
  async removeCart(ids) {
    const res = await CartModel.destroy({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });
    return res;
  };

  // ---购物车全选---;
  async selectAllCart(user_id) {
    const res = await CartModel.update({ selected: true }, { where: { user_id } });
    return res;
  };

  // ---购物车全选---;
  async unSelectAllCart(user_id) {
    const res = await CartModel.update({ selected: false }, { where: { user_id } });
    return res;
  };



};
// 实例化并导出;
module.exports = new CartService();