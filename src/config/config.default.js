// 导入dotenv;
const dotenv = require('dotenv');

// 读取.env文件中的变量到环境变量;
dotenv.config();


// 导出;
module.exports = process.env;