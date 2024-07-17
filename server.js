const express = require("express");const app = express();
const v1Router = require("./routes/v1/router");
const v2Router = require("./routes/v2/router");


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
app.use((req, res, next) => {
  res.status(200).send("No route found");
});

// server listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
