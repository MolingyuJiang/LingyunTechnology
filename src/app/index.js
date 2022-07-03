// 导入path;
const path = require('path');
// 导入Koa;
const Koa = require('koa');
// 创建koa实例对象;
const app = new Koa();
// 导入koa-body;
const KoaBody = require('koa-body');
// 导入koa-static;
const KoaStatic = require('koa-static');
// 导入koa-parameter;
const parameter = require('koa-parameter');
// 导入路由;
const router = require('../router/index');
// 导入统一错误处理;
const errHandler = require('../app/errHandler');
// 挂载KoaBody,用于解析请求参数;
app.use(KoaBody({
  //开启文件上传;
  multipart: true,
  //文件上传的详细配置;
  formidable: {
    //上传文件路径;
    uploadDir: path.join(__dirname, '../uploads'),
    //是否保留文件扩展名;
    keepExtensions: 'true'
  }
}));
//挂载koa-static,用于暴露静态资源目录;
app.use(KoaStatic(path.join(__dirname, '../uploads')));
// 挂载koa-parameter,用于参数校验;
app.use(parameter(app));
// 挂载路由;
app.use(router.routes());
// 对不支持的请求方式报错;
app.use(router.allowedMethods());
//统一的错误处理(监听ctx.app.emit提交事件抛出的错误);
app.on('error', errHandler);

// 导出app实例;
module.exports = app;