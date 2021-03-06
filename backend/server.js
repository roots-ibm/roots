const express = require('express'); // import express - CommonJS format
require('express-async-errors');
const cors = require('cors');
const mongoose = require('mongoose');
// const partnersRouter = require('./controllers/partners');
// const usersRouter = require('./controllers/users');
// const loginRouter = require('./controllers/login');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');

const app = express(); // create an express application

// connect to database
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB', error.message);
  });

app.use(cors());
app.use(express.static('build')); // serve the static file
app.use(express.json()); // parse incoming request with json payloads

// app.use(middleware.requestLogger);

// app.use('/api/partners', partnersRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/login', loginRouter);

// app.use(middleware.unknownEndpoint);
// app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
