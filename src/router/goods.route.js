// 用户相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入权限相关的中间件;
const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
// 导入商品相关的中间件;
const { validator } = require('../middleware/goods.middleware');
// 导入商品相关的控制器;
const { addGoods } = require('../controller/goods.controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/goods' });
// 商品上传;
router.post('/addGoods', auth, hadAdminPermission, validator, addGoods);







module.exports = router;
/**
 * 此文件是商品相关的路由文件;
 */