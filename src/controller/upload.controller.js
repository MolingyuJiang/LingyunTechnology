// 文件上传相关的控制器;
// 导入path;
const path = require('path');
// 导入商品相关的错误类型;
const { goodsImageUploadError, unsupportedgoodsImageType } = require('../constant/goods.err.type');
class UploadController {
  async goodsImageUpload(ctx, next) {
    // 解析用户请求信息中的参数;
    const { goodsImage } = ctx.request.files;
    //定义受支持的文件格式;
    const goodsImageTypes = ['image/jpeg', 'image/png'];
    try {
      if (goodsImage) {
        // 如果文件格式不支持;
        if (!goodsImageTypes.includes(goodsImage.mimetype)) {
          ctx.app.emit('error', unsupportedgoodsImageType, ctx);
          return;
        };
        ctx.body = {
          code: 0,
          message: '商品图片上传成功',
          result: {
            goods_image: path.basename(goodsImage.newFilename)
          }
        }
      }
    } catch (error) {
      console.log('商品图片上传失败', error)
      ctx.app.emit('error', goodsImageUploadError, ctx);
      return;
    }
  };
};

// 实例化并导出;
module.exports = new UploadController();
/**
 * 此文件是文件上传相关的控制器;
 */