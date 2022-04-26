const dotenv = require('dotenv');
const colors = require('colors');
const mongoose = require('mongoose');
// const users = require('./data/users.js');
const houses = require('./data/houses.js')
// const User = require('./models/userModels.js');
const House = require('./models/propertiesModel.js');
const connectDB = require('./config/db.js');

connectDB()

const importData = async () => {
    try {
        await House.deleteMany()
        // await User.deleteMany()

        // const createdUsers = await User.insertMany(users)

        // const adminUser = createdUsers[0]._id

        const sampleHouses = houses.map((house) => {
            return { ...house }
        })

        await House.insertMany(sampleHouses)

        console.log('Data Imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await House.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed Successfully!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}