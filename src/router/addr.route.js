// 地址相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入地址相关的控制器; 
const { addAddres } = require('../controller/addr.controller');
// 导入地址相关的中间件;
const { addrValidator } = require('../middleware/addr.middleware')
//导入权限校验相关的中间件;
const { auth } = require('../middleware/auth.middleware');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/address' });
//添加地址接口;
router.post('/addAddres', auth, addrValidator({
  consignee: 'string',
  phone: {
    type: 'string', format: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
  },
  address: 'string'
}), addAddres);



module.exports = router;
/**
 * 此文件是地址相关的路由文件;
 */