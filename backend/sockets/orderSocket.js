const orderSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(
      "Socket Client Connected"
    );

    socket.on(
      "disconnect",
      () => {
        console.log(
          "Socket Disconnected"
        );
      }
    );
  });
};

module.exports = orderSocket;