const router = require("express").Router();
const profilesController = require("../../controllers/profiles.controller.js");
const { authorization } = require("../../middlewares/authorization.js");

router.get("/profiles", [authorization], profilesController.getAllProfiles);

router
  .route("/profile/:id")
  .get([authorization], profilesController.getProfile)
  .put([authorization], profilesController.editProfile);

module.exports = router;
