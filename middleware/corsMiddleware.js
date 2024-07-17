const cors = require("cors");


let corsOptions;

// Load environment-specific CORS configuration
// if (process.env.NODE_ENV === 'development') {
//   corsOptions = require('./config.dev');
// } else if (process.env.NODE_ENV === 'qa') {
//   corsOptions = require('./config.qa');
// } else if (process.env.NODE_ENV === 'production') {
//   corsOptions = require('./config.prod');
// } else {
//   throw new Error('Unsupported environment');
// }



// Define CORS options
corsOptions = {
  origin: ["http://example.com", "http://128.0.0.1"], // Replace with your allowed origin
  methods: ["GET", "POST"], // Allow only GET and POST requests
  allowedHeaders: ["Content-Type"], // Allow only certain headers
};

// Create and export CORS middleware
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
