const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const routerNavigation = require("./src/routesNavigation");
// ==============================
const socket = require("socket.io");
// ==============================

const app = express();
app.use(cors());
// ==============================

const http = require("http");
const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("Socket.io Connect !");
  socket.on("globalMessage", (data) => {
    console.log(data);
    io.emit("chatMessage", data);
  });
  socket.on("privateMessage", (data) => {
    console.log(data);
    socket.emit("chatMessage", data);
  });
  socket.on("broadcastMessage", (data) => {
    console.log(data);
    socket.broadcast.emit("chatMessage", data);
  });
  socket.on("joinRoom", (data) => {
    console.log(data);
    socket.join(data.room);
    socket.broadcast.to(data.room).emit("chatMessage", {
      username: "BOT",
      message: `${data.username} joined Chat`,
    });
  });
  socket.on("moveRoom", (data) => {
    console.log(data);
    socket.leave(data.oldRoom);
    socket.join(data.room);
  });
  socket.on("roomMessage", (data) => {
    // console.log(data);
    io.to(data.room).emit("chatMessage", data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.to(data.room).emit("typingMessage", data);
  });
});
// ==============================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", routerNavigation);

server.listen(3000, () => {
  console.log("Listening on Port 3000");
});
