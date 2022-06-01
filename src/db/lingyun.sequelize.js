// sequelize及数据库连接相关文件;
// 导入sequelize;
const { Sequelize } = require('sequelize');
// 导入环境变量;
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = require('../config/config.default');
// 实例化sequelize对象并数据库连接;
const lingyunSequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
});
// 测试数据库连接;
// lingyunSequelize.authenticate().then(() => {
//   console.log('数据库连接成功');
// }).catch((err) => {
//   console.log('数据库连接失败', err);
// });
module.exports = lingyunSequelize;