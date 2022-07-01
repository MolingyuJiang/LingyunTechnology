// 用户相关的控制器;
// 导入数据库相关操作;
const { createUser } = require('../service/user.service');
// 导入错误类型;
const { userRegisterError } = require('../constant/user.err.type')
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

  }


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