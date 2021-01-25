const router = require("express").Router();
const uploadPhoto = require("../middleware/multer");
const {
  userRegister,
  loginUser,
  updateUser,
  getUser,
} = require("../controller/c_user");

router.post("/signup", userRegister);
router.get("/showprofile/:id", getUser);
router.post("/login", loginUser);
router.patch("/updateuser/:id", uploadPhoto, updateUser);
// router.post("/update", uploadPhoto, updateUser);

module.exports = router;
