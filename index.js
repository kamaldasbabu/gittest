const express = require("express");
const app = express();
// const helmet = require("helmet");
const morgan = require('morgan')('dev');
const v1Router = require("./routes/v1/router");
const v2Router = require("./routes/v2/router");
// const cors = require("./middleware/cors.middleware");
// const { limiter } = require("./middleware/limiter.middileware");
require("dotenv").config({path: `.env`});

const { Server } = require("socket.io");

const http = require("http");
const path = require("path");


const io = new Server();


app.get("/:id", (req, res) => {
  // eslint-disable-next-line no-undef
  const filePath = path.join(__dirname, "public", "web", "index.html");
  console.log("fil", filePath);
  res.sendFile(filePath);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
  });
});

// variables

// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 9000;

// SECURITY MIDDILEWARE
// helmet
// app.use(helmet());
//limiter
// app.use(limiter);
// CORS setup
// app.use(cors);
app.use(morgan);


// Built-in body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// eslint-disable-next-line no-undef
app.use(express.static(path.join( __dirname, "public", "web")));


// api version controls
app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);



// server ping test
app.get("/ping", (req, res) => {
  res.send("SERVER IS RUNNING");
});
// app.get("/", (req, res) => {
//   res.sendFile("./public/web/index.html");
// });


// wirld card routes
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(200).send("No route found");
});

// server listen


const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
