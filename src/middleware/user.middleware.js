//导入bcryptjs:用于用户密码加密;
const bcrypt = require('bcryptjs')
// 导入数据库操作;
const { getUserInfo } = require('../service/user.service');
//导入错误类型;
const { userFormateError, userAlreadyExists, userRegisterError, cryptPasswordError } = require('../constant/user.err.type');
//用户验证器:用于校验用户参数格式;
const userValidator = async (ctx, next) => {
  //获取用户请求参数中的信息;
  const { user_name, user_password } = ctx.request.body;
  //检查用户参数是否完整;
  if (!user_name || !user_password) {
    console.error('用户名或者密码为空', ctx.request.body);
    ctx.app.emit('error', userFormateError, ctx);
    return;
  };
  //放行;
  await next();
};
//验证用户是否已经存在;
const verifyUser = async (ctx, next) => {
  // 获取用户请求参数中的信息(获取用户名);
  const { user_name } = ctx.request.body;
  try {
    //使用getUserInfo根据用户名进行数据库查询,判断用户是否已存在;
    const res = await getUserInfo({ user_name });
    //根据数据库返回的数据进行判断用户是否已存在;
    if (res) {
      console.error('用户已存在', { user_name });
      ctx.app.emit('error', userAlreadyExists, ctx);
      return;
    };
  } catch (error) {
    console.error('获取用户信息错误', error);
    ctx.app.emit('error', userRegisterError, ctx);
    return;
  };
  // 放行;
  await next();
};
// 用户密码加密;
const cryptPassword = async (ctx, next) => {
  //获取用户请求信息中的参数;
  const { user_password } = ctx.request.body;
  try {
    //调用bcryptjs中的函数进行多次的添加数值;
    const salt = bcrypt.genSaltSync(10);
    //调用hashSync对传递的密码进行加密,hash中保存的是加密后的密码;
    const hash = bcrypt.hashSync(user_password, salt);
    //对用户请求信息中的密码进行重新赋值;
    ctx.request.body.user_password = hash;
  } catch (error) {
    console.error('用户注册密码加密失败', error);
    ctx.app.emit('error', cryptPasswordError, ctx);
    return;
  };
  //放行;
  await next();
};


// 导出;
module.exports = {
  userValidator,
  verifyUser,
  cryptPassword
};
/**
 * 此文件是用户相关的中间件处理;
 */