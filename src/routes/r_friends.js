const router = require("express").Router();
const {
  addFriend,
  getFriends,
  getFriendsWaited,
  getFriendsWaiting,
  confirmFriend,
} = require("../controller/c_friends");
const { authorization } = require("../middleware/auth");

router.post("/addfriend", addFriend);
router.get("/getfriend/:id", getFriends); // per ID USER
router.get("/getfriend/waiting/:id", getFriendsWaiting);
router.get("/getfriend/waited/:id", getFriendsWaited);
router.get("/getnewfriend/confirm/friend/:user_id", confirmFriend);

module.exports = router;
