const router = require("express").Router();
const { sendChat, getChats } = require("../controller/c_chat");

router.post("/send", sendChat);
router.get("/:rands", getChats);
module.exports = router;
