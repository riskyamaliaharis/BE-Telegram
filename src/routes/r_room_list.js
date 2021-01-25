const router = require("express").Router();
const { makeRoomChat, getRoomChat } = require("../controller/c_room_list");

router.post("/addlistchat", makeRoomChat);
router.get("/getlistchat/:id", getRoomChat);
module.exports = router;
