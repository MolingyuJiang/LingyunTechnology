// 用户相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入用户相关的控制器; 
const { userRegister } = require('../controller/user.controller')
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/users' });

// 用户注册接口;
router.post('/register', userRegister)





module.exports = router;