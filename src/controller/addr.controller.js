// 地址相关的控制器;
// 导入地址相关数据库相关操作;

// 导入地址相关的错误类型;



// 导入地址相关的错误类型;
const { } = require('../constant/addr.err.type')
class AddresController {
  // ---添加地址---;
  async addAddres(ctx, next) {
    ctx.body = '添加地址成功';
  };


};
// 实例化并导出;
module.exports = new AddresController();
/**
 * 此文件是地址相关的控制器;
 */