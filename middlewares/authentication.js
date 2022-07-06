const User = require("../db").User;
const bcrypt = require("bcrypt");

const authenticate = async (req, res, next) => {
  try {
    const { first_name, email, password } = req.body;
    const user = await User.findOne({
      where: {
        first_name: first_name,
        email: email,
      },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: `User with email: ${email} not found.` });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(403).json({ message: "Incorrect password." });
    } else {
      next();
    }
  } catch ({ message }) {
    res.status(400).json({ message: message });
  }
};

module.exports = { authenticate };
