const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many request. Please try after 15 min",
});

module.exports = { limiter };
