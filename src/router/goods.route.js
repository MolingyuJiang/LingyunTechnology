// 用户相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入权限相关的中间件;
const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
// 导入商品相关的中间件;
const { validator } = require('../middleware/goods.middleware');
// 导入商品相关的控制器;
const { addGoods, changeGoods, xiajia, shangjia, findAll } = require('../controller/goods.controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/goods' });
// 商品上传;
router.post('/addGoods', auth, hadAdminPermission, validator, addGoods);
// 修改商品;
router.put('/changeGoods/:id', auth, hadAdminPermission, validator, changeGoods);
// 下架商品;
router.post('/offGoods/:id/off', auth, hadAdminPermission, xiajia);
//上架商品;
router.post('/onGoods/:id/on', auth, hadAdminPermission, shangjia);
// 获取商品列表;
router.get('/list', findAll);;




module.exports = router;
/**
 * 此文件是商品相关的路由文件;
 */