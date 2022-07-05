// 地址相关的数据库模型;
// 导入Sequelize中的DataTypes属性来对模型的字段进行约束;
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const lingyunSequelize = require('../db/lingyun.sequelize');
// 创建地址相关的数据库模型对象;
const AddressModel = lingyunSequelize.define('lingyun_addresses', {
  user_id: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    //表注释;
    comment: '用户ID'
  },
  consignee: {
    // 字段类型;
    type: DataTypes.STRING,
    // 是否为空;
    allowNull: false,
    //表注释;
    comment: '收货人姓名'
  },
  phone: {
    // 字段类型;
    type: DataTypes.CHAR,
    // 是否为空;
    allowNull: false,
    //表注释;
    comment: '收货人手机号'
  },
  address: {
    // 字段类型;
    type: DataTypes.STRING,
    // 是否为空;
    allowNull: false,
    //表注释;
    comment: '收货人的地址'
  },
  is_default: {
    // 字段类型;
    type: DataTypes.STRING,
    // 是否为空;
    allowNull: false,
    //默认值;
    defaultValue: false,
    //表注释;
    comment: '是否为默认地址'
  },
});
// 创建数据库地址表(创建表,如果存在则先删除原始表再进行创建,具体:https://www.sequelize.com.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5);
//同步完一定要注释掉;
// AddressModel.sync({ force: true });
// 导出地址模型对象;
module.exports = AddressModel;