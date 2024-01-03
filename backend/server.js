const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// here we are enabling the connection of socket.io
io.on("connection", (socket) => {
  console.log("what is socket", socket);
  console.log("Socket is active to be connected");

  //here we are responding to the connection of socket.io by emiting
  socket.on("chat", (payload) => {
    console.log("what is payload", payload);
    io.emit("chat", payload);
  });
});

// we should listen on server socket
server.listen(8080, () => {
  console.log("Sever is listening on server socket");
});
