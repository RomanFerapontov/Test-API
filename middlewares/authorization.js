const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(401).json({ message: "No authorization header." });
  }
  const token = auth.split(" ")[0];
  jwt.verify(token, process.env.SECRET);
  next();
};

module.exports = { authorization };
