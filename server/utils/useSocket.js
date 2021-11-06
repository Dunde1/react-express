const { Server } = require("socket.io");

const info = {};
const rooms = {
  room1: [],
  room2: [],
  room3: [],
};

const useSocket = (io = new Server()) => {
  io.on("connection", (socket) => {
    console.log("connection!, id :", socket.id);

    socket.on("room", (roomNumber) => {
      socket.leave(socket.room);

      socket.room = `room${roomNumber}`;

      socket.join(socket.room);

      socket.emit("room", null);

      setTimeout(() => {
        const INVITE_MSG = `connect room${roomNumber} [${socket.id}] !!!`;

        socket.emit("chat", INVITE_MSG);
        socket.to(socket.room).emit("chat", INVITE_MSG);
      }, 0);
    });

    socket.on("chat", (msg) => {
      const CHAT = `${socket.id} : ${msg}`;

      socket.emit("chat", CHAT);
      socket.to(socket.room).emit("chat", CHAT);
    });

    socket.on("disconnect", () => {
      console.log("disconnect id :", socket.id);

      delete info[socket.id];
    });
  });
};

module.exports = { useSocket };
