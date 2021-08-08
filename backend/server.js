import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
dotenv.config()

connectDB()

const app = express()

import products from './data/products.js'

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})
app.listen(PORT, console.log(colors.yellow.bold(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)))