import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.remove({})
        await Product.remove({})
        await Order.remove({})
        const createdUsers = await User.create(users)

        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.create(sampleProducts)
        console.log(colors.green.inverse('Data imported successfully'))
        process.exit(0)
    } catch (err) {
        console.log(colors.red.inverse(err))
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await User.remove({})
        await Product.remove({})
        await Order.remove({})

        console.log(colors.red.inverse('Data destroyed!'))
        process.exit(0)
    } catch (err) {
        console.log(colors.red.inverse(err))
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}