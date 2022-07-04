// 用户相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入购物车相关的控制器; 
const { addCart } = require('../controller/cart.controller');
//导入购物车相关的中间件;
const { cartValidator } = require('../middleware/cart.middleware');
//导入权限校验相关的中间件;
const { auth } = require('../middleware/auth.middleware');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/carts' });
//添加购物车接口;
router.post('/addCart', auth, cartValidator, addCart);



module.exports = router;
/**
 * 此文件是购物车相关的路由文件;
 * ------控制器------;
 * addCart:添加购物车;
 * 
 * ------中间件------;
 * auth:验证用户登录;
 * cartValidator:验证购物车请求参数;
 */