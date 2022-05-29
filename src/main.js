// 导入环境变量;
const { APP_PORT } = require('./config/config.default');
// 导入app;
const app = require('./app/index')
// 监听端口;
app.listen(APP_PORT, () => {
  console.log(`凌云系统启动成功,当前端口为:${APP_PORT}`);
})