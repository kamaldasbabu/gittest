const express = require("express");
const app = express();
const helmet = require("helmet");
const v1Router = require("./routes/v1/router");
const v2Router = require("./routes/v2/router");
const corsMiddleware = require("./middleware/cors.middleware");
const { limiter } = require("./middleware/limiter.middileware");
require("dotenv").config();

// SECURITY MIDDILEWARE
// helmet
app.use(helmet());
//limiter
app.use(limiter);
// CORS setup
app.use(corsMiddleware);


// Built-in body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// api version controls
app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);


// server ping test
app.get("/ping", (req, res) => {
  res.send("SERVER IS RUNNING");
});


// wirld card routes
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(200).send("No route found");
});

// server listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
