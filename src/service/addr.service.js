// 地址相关的数据库操作;
// 导入sequelize; 
const { Op } = require('sequelize');
// 导入地址数据库模型对象;
const AddressModel = require('../model/addr.model');
class AddrService {
  // ---添加地址---;
  async createAddr(addr) {
    const res = await AddressModel.create(addr);
    return res;
  };
  // ---获取地址列表---;
  async findAllAddr(user_id) {
    const res = await AddressModel.findAll({
      // 需要的字段;
      attributes: ['id', 'consignee', 'phone', 'address', 'is_default'],
      where: { user_id }
    });
    return res;
  };
  // ---修改地址---;
  async updateAddr(id, params) {
    const res = await AddressModel.update(params, { where: { id } });
    return res;
  };
  // ---删除地址---;
  async removeAddr(id) {
    const res = await AddressModel.destroy({ where: { id } });
    return res;
  };
  // ---设置默认地址---;
  async setDefaultAddr(user_id, id) {
    // 根据用户ID把所有用户地址取消默认再根据地址ID进行默认地址设置;
    await AddressModel.update({ is_default: false }, {
      where: {
        user_id
      }
    });
    const res = await AddressModel.update(
      { is_default: true },
      {
        where: {
          id
        }
      }
    );
    return res;
  };
};
// 实例化并导出;
module.exports = new AddrService();