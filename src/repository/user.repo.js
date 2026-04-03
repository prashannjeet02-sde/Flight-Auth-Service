const { User } = require("../models/index");

class UserRepository {
  async RepocreateUser(data) {
    const user = await User.create(data);
    return user;
  }

  async ReporemoveUser(userId) {
    const remove = await User.destroy({
      where: {
        id: userId,
      },
    });
    return remove;
  }
}

module.exports = UserRepository;
