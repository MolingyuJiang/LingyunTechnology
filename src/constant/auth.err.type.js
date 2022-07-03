module.exports = {
  tokenExpiredError: {
    code: 10101,
    message: 'token已过期',
    result: ''
  },
  jsonWebTokenError: {
    code: 10102,
    message: '无效的token',
    result: ''
  },
  hadAdminPermissionError: {
    code: 10103,
    message: '获取管理员权限失败',
    result: ''
  },
  hadNotAdminPermission: {
    code: 10104,
    message: '该用户没有管理员权限',
    result: ''
  },
};
/**
 * 用户鉴权相关的错误类型;
 */