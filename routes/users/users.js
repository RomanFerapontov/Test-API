const router = require("express").Router();
const usersController = require("../../controllers/users.controller.js");
const { registerValidation } = require("../../middlewares/registration.js");
const { authenticate } = require("../../middlewares/authentication.js");

router.post("/register", [registerValidation], usersController.register);
router.post("/login", [authenticate], usersController.login);

module.exports = router;
