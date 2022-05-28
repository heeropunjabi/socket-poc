const { WebSocketServer } = require("ws");

const server = new WebSocketServer({ port: 3000 });

server.on("connection", (socket) => {
  // send a message to the client
  socket.send(
    JSON.stringify({
      type: "hello from server",
      content: [1, "2"],
    })
  );

  // receive a message from the client
  socket.on("message", (data) => {
    const packet = JSON.parse(data);

    switch (packet.type) {
      case "hello from client":
        // ...
        break;
    }
  });
});

// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.broadcast.emit("hi");
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

// server.listen(3000, () => {
//   console.log("listening on *:3000");
// });
