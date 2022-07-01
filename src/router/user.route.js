// 用户相关的路由;
// 导入koa-router;
const Router = require('koa-router');
// 导入用户相关的控制器; 
const { userRegister, userLogin, userUpdatePassword } = require('../controller/user.controller');
//导入用户相关的中间件;
const { userValidator, verifyUser, cryptPassword, verifyLogin } = require('../middleware/user.middleware');
//导入权限校验相关的中间件;
const { auth } = require('../middleware/auth.middleware')
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/users' });
// 用户注册接口;
router.post('/register', userValidator, verifyUser, cryptPassword, userRegister);
//用户登录接口;
router.post('/login', userValidator, verifyLogin, userLogin);
//用户修改密码接口;
router.patch('/updatePassword', auth, cryptPassword, userUpdatePassword)




module.exports = router;
/**
 * 此文件是用户相关的路由文件;
 * ------路由------;
 * /register(用户注册);
 * /login(用户登录);
 * ------控制器------;
 * userRegister:创建用户;
 * userLogin:用户登录;
 * userUpdatePassword:修改密码;
 * ------中间件------;
 * userValidator:判断用户请求参数是否完整;
 * verifyUser:判断用户是否已存在;
 * cryptPassword:用户密码加密;
 */