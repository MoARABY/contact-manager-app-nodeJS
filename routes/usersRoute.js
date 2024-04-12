const express = require("express");
const router = express.Router();
const tokenHandler = require("../middleware/validateTokenHandler");
const {
  userRegister,
  userLogin,
  currentUser,
} = require("../controller/usersController");
// router.route("/").post(createUser).get(getUsers);
// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/current", tokenHandler, currentUser);

module.exports = router;
