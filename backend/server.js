const colors = require('colors');
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import connectDB from './config/db.js '
// import productRoutes from './routes/productRoutes.js'

// app.use(notFound)
// app.use(errorHandler)

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: './config.env'})
const PORT = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());
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
