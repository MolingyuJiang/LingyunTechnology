// 用户相关的控制器; 
class UserController {
  // 用户注册;
  async userRegister(ctx, next) {
    ctx.body = '注册成功'
  }
};

// 实例化并导出;
module.exports = new UserController();