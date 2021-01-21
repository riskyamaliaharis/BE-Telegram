const router = require("express").Router();
// const uploadPhoto = require("../middleware/multerUser");
const { userRegister, loginUser } = require("../controller/c_user");

router.post("/signup", userRegister);
router.post("/login", loginUser);
// router.post("/update", uploadPhoto, updateUser);

module.exports = router;
