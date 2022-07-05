// 地址相关的控制器;
// 导入地址相关数据库相关操作;
const { createAddr, findAllAddr, updateAddr, removeAddr, setDefaultAddr } = require('../service/addr.service');
// 导入地址相关的错误类型;
const { addAddresError, addresListError, changeAddrError, delAddrError, setDefaultAddrError } = require('../constant/addr.err.type');
class AddrController {
  // ---添加地址---;
  async addAddres(ctx, next) {
    // 解析获取用户ID及请求信息中的参数;
    const user_id = ctx.state.user.id;
    const { consignee, phone, address } = ctx.request.body;
    try {
      const res = await createAddr({ user_id, consignee, phone, address });
      ctx.body = {
        code: 0,
        message: '添加地址成功',
        result: res
      };
    } catch (error) {
      console.error('添加地址失败', error);
      ctx.app.emit('error', addAddresError, ctx);
    };
  };

  //---获取地址列表---;
  async addresList(ctx, next) {
    // 获取用户ID;
    const user_id = ctx.state.user.id;
    try {
      const res = await findAllAddr(user_id);
      ctx.body = {
        code: 0,
        message: '获取地址列表成功',
        result: res
      };
    } catch (error) {
      console.error('获取地址列表失败', error);
      ctx.app.emit('error', addresListError, ctx);
      return;
    };
  };

  //---更改地址---;
  async changeAddr(ctx, next) {
    // 获取请求路径中的参数ID;
    const id = ctx.request.params.id;
    try {
      const res = await updateAddr(id, ctx.request.body);
      ctx.body = {
        code: 0,
        message: '修改地址成功',
        result: res
      }
    } catch (error) {
      console.error('修改地址失败', error);
      ctx.app.emit('error', changeAddrError, ctx);
      return;
    };
  };

  //---删除地址---;
  async delAddr(ctx, next) {
    // 获取请求路径中的参数ID;
    const id = ctx.request.params.id;
    try {
      const res = await removeAddr(id);
      ctx.body = {
        code: 0,
        message: '删除地址成功',
        result: res
      }
    } catch (error) {
      console.error('删除地址失败', error);
      ctx.app.emit('error', delAddrError, ctx);
      return;
    };
  };

  // ---设置默认地址---;
  async defaultAddr(ctx, next) {
    // 获取请求路径中的参数ID;
    const id = ctx.request.params.id;
    // 获取用户ID;
    const user_id = ctx.state.user.id;
    try {
      const res = await setDefaultAddr(user_id, id);
      ctx.body = {
        code: 0,
        message: '设置默认地址成功',
        result: res
      }
    } catch (error) {
      console.error('设置默认地址失败', error);
      ctx.app.emit('error', setDefaultAddrError, ctx);
      return;
    };
  };



};
// 实例化并导出;
module.exports = new AddrController();
/**
 * 此文件是地址相关的控制器;
 */