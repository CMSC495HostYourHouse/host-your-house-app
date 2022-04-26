const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://dbuser:5VSyuHJUeXoTBqDG@hostyourhouse.unjhv.mongodb.net/HostYourHouse?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bgWhite.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB;