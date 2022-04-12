import mongoose from 'mongoose'
import users from './data/users.js'
import houses from './data/houses.js'
import User from './models/userModels.js'
import House from './models/propertiesModel.js'

import connectToServer from './conn.js';

connectToServer()

const importData = async () => {
    try {
        await House.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleHouses = houses.map((house) => {
            return { ...house, user: adminUser }
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