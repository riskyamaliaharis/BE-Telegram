const router = require("express").Router();
const uploadPhoto = require("../middleware/multer");
const {
  userRegister,
  loginUser,
  updateUser,
  getUser,
  autoUpdateLocation,
  deletePhoto,
  getMyRooms,
} = require("../controller/c_user");

router.post("/signup", userRegister);
router.get("/showprofile/:id", getUser);
router.get("/myrooms/list/:id", getMyRooms);
router.post("/login", loginUser);
router.patch("/updateuser/:id", uploadPhoto, updateUser);
router.patch("/update/location", autoUpdateLocation);
router.patch("/update/photo/:user_id", deletePhoto);

module.exports = router;
