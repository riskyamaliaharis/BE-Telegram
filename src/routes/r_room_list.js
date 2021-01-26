const router = require("express").Router();
const {
  makeRoomChat,
  getRoomChat,
  makeRoomChatForFriend,
  deleteChat,
} = require("../controller/c_room_list");

router.post("/addlistchat", makeRoomChat);
router.post("/addlistchatforfriend", makeRoomChatForFriend);
router.get("/getlistchat/:id", getRoomChat);
router.delete("/deletechat/:rand", deleteChat);
module.exports = router;
