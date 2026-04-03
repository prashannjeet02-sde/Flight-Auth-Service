const userRepository = require("../repository/user.repo");

class UserService {
  constructor() {
    this.userRepo = new userRepository();
  }

  async serviceCreateUser(data) {
    const user = await this.userRepo.RepocreateUser(data);
    return user;
  }

  async serviceRemoveUser(userId) {
    const remove = await this.userRepo.ReporemoveUser(userId);
    return remove;
  }
}

module.exports = UserService;
