// 用户相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入文件上传相关的控制器;
const { goodsImageUpload } = require('../controller/upload.controller');
// 导入鉴权相关的中间件;
const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/upload' });
// 商品图片上传;
router.post('/goodsImageUpload', auth, hadAdminPermission, goodsImageUpload);







module.exports = router;
/**
 * 此文件是文件上传相关的路由文件;
 */