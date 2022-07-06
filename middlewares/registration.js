const User = require("../db").User;

const registerValidation = async (req, res, next) => {
  const { email, first_name, password } = req.body;
  if (Object.keys(req.body).length > 3) {
    return res.status(400).json({
      message: "Excess fields passed.",
    });
  }
  if (!email || !first_name || !password) {
    return res.status(400).json({
      message:
        "Fields: 'first_name', 'email', 'password' are necessary for registration",
    });
  }
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (user) {
    const error = new Error(`User with email: ${email} already exists.`);
    next(error);
  }
  next();
};

module.exports = { registerValidation };
