const router = require("express").Router();

const user = require("./routes/r_user");
const friends = require("./routes/r_friends");
const room = require("./routes/r_room_list");
router.use("/", user);
router.use("/", friends);
router.use("/", room);

module.exports = router;
