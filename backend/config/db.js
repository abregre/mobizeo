import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}


export default connectDB