const User = require("../db").User;

class ProfilesController {
  async editProfile(req, res) {
    try {
      const { id, password, date } = req.body;
      if (id || password || date) {
        return res.status(400).json({
          message: "Fields: 'id', 'password', 'date' can't be changed.",
        });
      }

      await User.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json({ message: "Userdata updated sucsessfully." });
    } catch ({ message }) {
      res.status(400).json({
        message: message,
      });
    }
  }

  async getProfile(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      if (!user) {
        return res.status(400).json({ message: `User not found.` });
      } else {
        res.status(200).json(user);
      }
    } catch ({ message }) {
      res.status(400).json({ message: message });
    }
  }

  async getAllProfiles(req, res) {
    try {
      const page = parseInt(req.query.page) - 1;
      if (page < 0) {
        return res.status(400).json({ message: "Incorrect page." });
      }
      const users = await User.findAndCountAll({
        limit: 10,
        offset: page * 10,
        order: [["date", "ASC"]],
      });
      res.status(200).send(users);
    } catch ({ message }) {
      res.status(400).json({ message: message });
    }
  }
}

module.exports = new ProfilesController();
