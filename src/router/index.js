// 导入fs模块;
const fs = require('fs');
// 导入koa - router并进行实例化;
const Router = require('koa-router');
const router = new Router();
// 读取当前目录文件并进行遍历;
fs.readdirSync(__dirname).forEach(file => {
  // 排除index.js文件并对剩余文件进行加载;
  if (file !== 'index.js') {
    // 对获取到的文件名进行路径拼接;
    let lingyunRouter = require('./' + file);
    // 注册路由;
    router.use(lingyunRouter.routes());
  }
});
// 导出;
module.exports = router;
