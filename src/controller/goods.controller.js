// 商品相关的控制器;
// 导入常量(.env文件);
const { JWT_SECRET } = require('../config/config.default');
// 导入商品相关数据库相关操作;

// 导入错误类型;

class GoodsController {
  // 添加商品;
  async addGoods(ctx, next) {
    ctx.body = '商品上传成功'
  };



};

// 实例化并导出;
module.exports = new GoodsController();
/**
 * 此文件是商品相关的控制器;
 * 
 * 
 */