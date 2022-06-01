// 用户相关的控制器;
// 导入数据库相关操作;
const { createUser } = require('../service/user.service');
class UserController {
  // 用户注册;
  async userRegister(ctx, next) {
    // 获取用户请求参数;
    const { user_name, user_pwd } = ctx.request.body;
    try {
      // 操作数据库;
      const res = await createUser({ user_name, user_pwd });
      ctx.body = {
        code: 0,
        mesdage: '注册成功',
        result: res
      }
    } catch (error) {

    }
  }
};

// 实例化并导出;
module.exports = new UserController();