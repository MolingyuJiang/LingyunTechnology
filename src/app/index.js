// 导入Koa;
const Koa = require('koa');
// 创建koa实例对象;
const app = new Koa();
// 导入koa-body;
const KoaBody = require('koa-body');
// 导入路由;
const router = require('../router/index');
// 挂载KoaBody,用于解析请求参数;
app.use(KoaBody());
// 挂载路由;
app.use(router.routes());
// 对不支持的请求方式报错;
app.use(router.allowedMethods());
// 导出app实例;
module.exports = app;