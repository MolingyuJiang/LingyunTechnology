// 订单相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入订单相关的控制器; 
const { addOrder, orderList, changeOrder } = require('../controller/order.controller');
//导入订单相关的中间件;
const { orderValidator } = require('../middleware/order.middleware')
//导入权限校验相关的中间件;
const { auth } = require('../middleware/auth.middleware');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/orders' });
//添加订单接口;
router.post('/addOrder', auth, orderValidator({
  address_id: 'int',
  goods_info: 'string',
  total: 'number'
}), addOrder);
//获取订单列表;
router.get('/orderList', auth, orderList);
// 修改订单;
router.patch('/changeOrder/:id', auth, orderValidator({ order_state: 'number' }), changeOrder);
module.exports = router;
/**
 * 此文件是订单相关的路由文件;
 */