const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

// Settting up config.env file variables
dotenv.config({ path: './config/config.env' });

// Connecting to the MongoDB databse
connectDatabase();

// Setup body parser
app.use(express.json());

// // Creating own middleware
// const middleware = (req, res, next) => {
//   console.log('Waving from Middleware');

//   // Setting user variable globally
//   req.requestMethod = req.method;
//   req.requestUrl = req.url;
//   next();
// };

// app.use(middleware);

// Importing all routes
const jobs = require('./routes/jobs');

app.use('/api/v1', jobs);

// Server starting.
const PORT = process.env.PORT;
app.listen(3000, () => {
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
