const express = require("express");
const router = express.Router();

router.use("/", require("./profiles/profile.js"));
router.use("/user", require("./users/users.js"));

router.get("*", (req, res, next) => {
  res.status(400).json({ message: "Bad request" });
  next();
});

router.use(function (err, req, res, next) {
  if (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
});

module.exports = router;
