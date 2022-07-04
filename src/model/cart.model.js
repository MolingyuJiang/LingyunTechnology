// 购物车相关的数据库模型;
// 导入Sequelize中的DataTypes属性来对模型的字段进行约束;
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const lingyunSequelize = require('../db/lingyun.sequelize');
// 创建购物车相关的数据库模型对象;
const CartModel = lingyunSequelize.define('lingyun_cart', {

});
// 创建数据库购物车表(创建表,如果存在则先删除原始表再进行创建;
//同步完一定要注释掉;
//CartModel.sync({ force: true });
// 导出购物车模型对象;
module.exports = CartModel;