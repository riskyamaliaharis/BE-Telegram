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
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use("/chatapi/uploadfile", express.static("uploads/"));
// ==============================

const http = require("http");
const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
  path: "/chatapi/socket.io",
});

io.on("connection", (socket) => {
  socket.on("globalMessage", (data) => {
    console.log("1");
    io.emit("chatMessage", data);
  });
  socket.on("joinRoom", (data) => {
    console.log("2");
    console.log(data);
    socket.join(data.room);
  });
  socket.on("changeRoom", (data) => {
    console.log("3");
    console.log(data);
    socket.leave(data.oldRoom);
    socket.join(data.room_chat);
  });
  socket.on("roomMessage", (data) => {
    console.log("4");
    console.log(data);
    io.to(data.room_chat).emit("chatMessage", data);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/chatapi", routerNavigation);

server.listen(process.env.PORT, () => {
  console.log("Listening on Port 3000");
});
