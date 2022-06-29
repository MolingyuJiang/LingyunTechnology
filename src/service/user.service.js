// 用户相关的数据库操作;
// 导入用户数据库模型对象;
const UserModel = require('../model/user.model');
class UserService {
  //创建用户;
  async createUser({ user_name, user_password }) {
    const res = await UserModel.create({ user_name, user_password });
    return res.dataValues;
  }
  // 查询用户;
  async getUserInfo({ id, user_name, user_password, is_admin }) {
    // 定义where条件;
    const whereOpt = {};
    // 如果不存在参数, 则进行已有参数拷贝;
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    user_password && Object.assign(whereOpt, { user_password });
    is_admin && Object.assign(whereOpt, { is_admin });
    //通过sequelize的findOne进行数据库查询;
    const res = await UserModel.findOne({
      // 查询的字段;
      attributes: ['id', 'user_name', 'user_password', 'is_admin'],
      where: whereOpt
    });
    return res ? res.dataValues : null
  }


};

// 实例化并导出;
module.exports = new UserService();