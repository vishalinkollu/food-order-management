// const express = require("express");

// const mongoose = require("mongoose");

// const cors = require("cors");

// const dotenv = require("dotenv");

// const http = require("http");

// const { Server } = require("socket.io");

// dotenv.config();

// const app = express();

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// const menuRoutes = require("./routes/menuRoutes");

// const orderRoutes =
//   require("./routes/orderRoutes");

// const orderSocket =
//   require("./sockets/orderSocket");

// app.use(cors());

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API Running...");
// });

// app.use("/api/menu", menuRoutes);

// app.use(
//   "/api/orders",
//   orderRoutes(io)
// );

// orderSocket(io);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log(
//       "MongoDB Connected"
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const PORT =
//   process.env.PORT || 5000;

// server.listen(PORT, () => {
//   console.log(
//     `Server running on port ${PORT}`
//   );
// });


const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const dotenv = require("dotenv");

const http = require("http");

const { Server } = require("socket.io");

dotenv.config();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const menuRoutes = require("./routes/menuRoutes");

const orderRoutes =
  require("./routes/orderRoutes");

const orderSocket =
  require("./sockets/orderSocket");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/menu", menuRoutes);

app.use(
  "/api/orders",
  orderRoutes(io)
);

orderSocket(io);

/*
  CONNECT TO MONGODB
  SKIP DURING TESTS
*/
if (
  process.env.NODE_ENV !==
  "test"
) {
  mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => {
      console.log(
        "MongoDB Connected"
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

const PORT =
  process.env.PORT || 5000;

/*
  START SERVER
  SKIP DURING TESTS
*/
if (
  process.env.NODE_ENV !==
  "test"
) {
  server.listen(PORT, () => {
    console.log(
      `Server running on port ${PORT}`
    );
  });
}

module.exports = app;