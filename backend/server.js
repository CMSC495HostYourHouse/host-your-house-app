const colors = require('colors');
const express = require('express');
const passport = require('passport');

require('dotenv').config({ path: './config.env' })
const connectDB = require('./config/db.js')
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const housesEndpoints = require('./routes/housesEndpoints');

const PORT = process.env.PORT || 5000;

connectDB()

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//middleware for passport
app.use(passport.initialize());

//passport configuration
require('./middleware/passport')(passport)
//endpoints to grab data
app.use(require('./routes/userEndpoints'));
app.use('/api/houses', housesEndpoints);

const database = require('./conn');

app.listen(PORT, () => {
  database.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server running on port ${PORT}`.brightMagenta.bgYellow.bold)
});

// app.use(notFound)
// app.use(errorHandler)
// dotenv.config()
// connectDB()