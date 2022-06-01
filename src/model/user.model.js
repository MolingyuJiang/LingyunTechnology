// 用户相关的数据库模型;
// 导入Sequelize中的DataTypes属性来对模型的字段进行约束;
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const lingyunSequelize = require('../db/lingyun.sequelize');
// 创建用户相关的数据库模型对象;
const UserModel = lingyunSequelize.define('lingyun_user', {
  // 用户头像;
  user_avatar: {
    // 字段类型;
    type: DataTypes.STRING,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '用户头像'
  },
  // 用户名;
  user_name: {
    // 字段类型;
    type: DataTypes.STRING,
    // 是否为空;
    allowNull: false,
    // 字段是否是唯一值;
    unique: true,
    // 表注释;
    comment: '用户名'
  },
  // 用户密码;
  user_password: {
    // 字段类型;
    type: DataTypes.CHAR(64),
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '用户密码'
  },
  // 是否为管理员;
  is_admin: {
    // 字段类型;
    type: DataTypes.BOOLEAN,
    // 是否为空;
    allowNull: false,
    // 默认值;
    defaultValue: 0,
    // 表注释;
    comment: '是否是管理员,0不是,1是'
  },
});
// 创建数据库用户表(创建表,如果存在则先删除原始表再进行创建,具体:https://www.sequelize.com.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5);
//同步完一定要注释掉;
// UserModel.sync({ force: true });
// 导出用户模型对象;
module.exports = UserModel;