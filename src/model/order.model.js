// 订单相关的数据库模型;
// 导入Sequelize中的DataTypes属性来对模型的字段进行约束;
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const lingyunSequelize = require('../db/lingyun.sequelize');
// 创建订单相关的数据库模型对象;
const OrderModel = lingyunSequelize.define('lingyun_orders', {
  user_id: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '用户ID'
  },
  address_id: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '地址ID'
  },
  goods_info: {
    // 字段类型;
    type: DataTypes.TEXT,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '商品信息'
  },
  total: {
    // 字段类型;
    type: DataTypes.INTEGER,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '订单总金额'
  },
  order_number: {
    // 字段类型;
    type: DataTypes.CHAR,
    // 是否为空;
    allowNull: false,
    // 表注释;
    comment: '订单编号'
  },
  order_state: {
    // 字段类型;
    type: DataTypes.TINYINT,
    // 是否为空;
    allowNull: false,
    // 默认值;
    defaultValue: 0,
    // 表注释;
    comment: '订单状态(0:未支付,1:已支付,2:已发货,3:已签收,4:取消,)'
  },
});
// 创建数据库订单表(创建表,如果存在则先删除原始表再进行创建,具体:https://www.sequelize.com.cn/core-concepts/model-basics#%E6%A8%A1%E5%9E%8B%E5%90%8C%E6%AD%A5);
//同步完一定要注释掉;
// OrderModel.sync({ force: true });
// 导出订单模型对象;
module.exports = OrderModel;