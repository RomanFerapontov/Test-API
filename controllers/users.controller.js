const User = require("../db").User;
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UsersController {
  async register(req, res) {
    try {
      const { password } = req.body;

      if (password.length <= 4 || password.length >= 32) {
        return res.status(400).json({ message: "Incorrect password length." });
      }

      const userData = req.body;

      await bcrypt.hash(password, 3).then((data) => {
        userData.password = data;
      });
      await User.create(userData);
      res.status(200).json({
        message: `User ${req.body.first_name} is created.`,
      });
    } catch ({ errors }) {
      res.status(403).json({ message: errors });
    }
  }

  async login(req, res) {
    try {
      const token = jwt.sign(req.body, process.env.SECRET, {
        expiresIn: "24h",
      });

      res.status(200).json({ token: token });
    } catch ({ message }) {
      res.status(403).json({ message: message });
    }
  }
}

module.exports = new UsersController();
