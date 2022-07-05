// 购物车相关的数据库模型;
// 导入Sequelize中的DataTypes属性来对模型的字段进行约束;
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const lingyunSequelize = require('../db/lingyun.sequelize');
// 导入商品数据库模型,用于表关联查询;
const GoodsModel = require('./goods.model')
// 创建购物车相关的数据库模型对象;
const CartModel = lingyunSequelize.define('lingyun_carts', {
  goods_id: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    //表注释;
    comment: '商品ID'
  },
  user_id: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    //表注释;
    comment: '用户ID'
  },
  number: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    //默认值;
    defaultValue: 1,
    //表注释;
    comment: '商品数量'
  },
  selected: {
    // 字段类型;
    type: DataTypes.BOOLEAN,
    // 是否为空;
    allowNull: false,
    //默认值;
    defaultValue: false,
    //表注释;
    comment: '是否勾选'
  }
});
// 创建数据库购物车表(创建表,如果存在则先删除原始表再进行创建;
//同步完一定要注释掉;
// CartModel.sync({ force: true });
// 表关联,具体:https://www.sequelize.com.cn/core-concepts/assocs;
CartModel.belongsTo(GoodsModel, {
  //指定外键;
  foreignKey: 'goods_id',
  //别名;
  as: 'goods_info'
});
// 导出购物车模型对象;
module.exports = CartModel;