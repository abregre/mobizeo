import mongoose from 'mongoose'
import colors from 'colors'


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log((colors.cyan.underline`MongoDB Connected: ${connection.connection.host}`))
    } catch (err) {
        console.log(colors.red.underline.bold(`Error: ${err.message}`))
        process.exit(1)
    }
}


export default connectDB