const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const routerNavigation = require("./src/routesNavigation");
// ==============================
const socket = require("socket.io");
// ==============================

const app = express();
app.use(cors());
app.use(express.static("uploads/"));
// ==============================

const http = require("http");
const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("globalMessage", (data) => {
    io.emit("chatMessage", data);
  });
  socket.on("joinRoom", (data) => {
    console.log(data);
    socket.join(data.room);
  });
  socket.on("changeRoom", (data) => {
    console.log(data);
    socket.leave(data.oldRoom);
    socket.join(data.room_chat);
  });
  socket.on("roomMessage", (data) => {
    console.log(data);
    io.to(data.room_chat).emit("chatMessage", data);
  });
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", routerNavigation);

server.listen(process.env.PORT, () => {
  console.log("Listening on Port 3000");
});
