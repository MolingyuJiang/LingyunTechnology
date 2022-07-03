// 用户相关的数据库模型;
// 导入Sequelize中的DataTypes属性来对模型的字段进行约束;
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const lingyunSequelize = require('../db/lingyun.sequelize');
// 创建用户相关的数据库模型对象;
const GoodsModel = lingyunSequelize.define('lingyun_goods', {
  // 商品名;
  goods_name: {
    // 字段类型;
    type: DataTypes.STRING,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '商品名'
  },
  goods_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    comment: '商品价格'
  },
  goods_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '商品库存'
  },
  goods_image: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '商品图片'
  }
});
// 创建数据库商品表(创建表,如果存在则先删除原始表再进行创建,具体:https://www.sequelize.com.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5);
//同步完一定要注释掉;
// GoodsModel.sync({ force: true });
// 导出用户模型对象;
module.exports = GoodsModel;