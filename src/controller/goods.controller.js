// 商品相关的控制器;
// 导入商品相关数据库相关操作;
const { createGoods, updateGoods } = require('../service/goods.service');
// 导入错误类型;
const { addGoodsError, changeGoodsError, invalidGoodsID } = require('../constant/goods.err.type');
class GoodsController {
  // 添加商品;
  async addGoods(ctx, next) {
    try {
      // 调用数据库操作并进行参数剔除;
      const { createdAt, updatedAt, ...res } = await createGoods(ctx.request.body);
      ctx.body = {
        code: 0,
        message: '发布商品成功',
        result: res
      };
    } catch (error) {
      console.error('发布商品失败', error);
      ctx.app.emit('error', addGoodsError, ctx);
      return;
    };
  };
  // 修改商品;
  async changeGoods(ctx, next) {
    try {
      // 根据商品ID修改商品信息;
      const res = await updateGoods(ctx.params.id, ctx.request.body);
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品信息修改成功',
          result: ''
        }
      } else {
        console.error('无效的商品ID', ctx.params.id);
        ctx.app.emit('error', invalidGoodsID, ctx);
        return;
      }
    } catch (error) {
      console.error('商品修改失败', error);
      ctx.app.emit('error', changeGoodsError, ctx);
      return;
    }
  }


};

// 实例化并导出;
module.exports = new GoodsController();
/**
 * 此文件是商品相关的控制器;
 */