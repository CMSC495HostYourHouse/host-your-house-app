const colors = require('colors');
const express = require('express');
const passport = require("passport")

// import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// app.use(notFound)
// app.use(errorHandler)

const app = express();
const cors = require('cors');
require('dotenv').config({path: './config.env'})
const PORT = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

//middleware for passport
app.use(passport.initialize());

//passport configuration
require('./middleware/passport')(passport)
//endpoints to grab data
app.use(require('./routes/userEndpoints'));

const database = require('./conn');

app.listen(PORT, () => {
  database.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server running on port ${PORT}`.brightMagenta.bgYellow.bold)
});


// dotenv.config()
// connectDB()


// app.get('/', (req, res) => {
//     res.send('API is running...')
// })

// app.use('/api/products', productRoutes)
