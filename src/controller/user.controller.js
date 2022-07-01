// 用户相关的控制器;
//导入jsonwebtoken(用于生成token);
const jwt = require('jsonwebtoken');
// 导入常量(.env文件);
const { JWT_SECRET } = require('../config/config.default')
// 导入数据库相关操作;
const { createUser, getUserInfo, updateUserById } = require('../service/user.service');
// 导入错误类型;
const { userRegisterError, userLoginError, updatePasswordError } = require('../constant/user.err.type');
class UserController {
  // 用户注册;
  async userRegister(ctx, next) {
    // 获取用户请求参数;
    const { user_name, user_password } = ctx.request.body;
    try {
      // 如果用户不存在则操作数据库,创建新的用户;
      const res = await createUser({ user_name, user_password });
      ctx.body = {
        code: 0,
        mesdage: '注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }
    } catch (error) {
      console.log(error);
      ctx.app.emit('error', userRegisterError, ctx);
    }
  };
  //用户登录;
  async userLogin(ctx, next) {
    //获取用户请求信息中的数据;
    const { user_name, user_password } = ctx.request.body;
    try {
      //根据用户名进行数据库查询并剔除不需要的属性;
      const { user_password, ...res } = await getUserInfo({ user_name });
      //返回信息;
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
        }
      };
    } catch (error) {
      console.error('用户登陆失败', error);
      ctx.app.emit('error', userLoginError, ctx);
      return;
    };
  };
  //用户修改密码;
  async userUpdatePassword(ctx, next) {
    // 获取需要修改密码的用户ID;
    const id = ctx.state.user.id;
    // 获取用户请求信息中的新密码;
    const { user_password } = ctx.request.body;
    try {
      // 操作数据库;
      const res = await updateUserById({ id, user_password });
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改密码成功',
          result: ''
        };
      };
    } catch (error) {
      console.error('修改密码失败', error);
      ctx.app.emit('error', updatePasswordError, ctx);
      return;
    }
  };
};

// 实例化并导出;
module.exports = new UserController();
/**
 * 此文件是用户相关的控制器;
 * userRegister(用户注册)
 * 
 * 
 * 
 */