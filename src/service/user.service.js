// 用户相关的数据库操作;
class UserService {
  async createUser({ user_name, user_pwd }) {
    return '写入数据库成功'

  }
}

// 实例化并导出;
module.exports = new UserService();