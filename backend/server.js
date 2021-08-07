import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

import products from './data/products.js'

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id)
    res.json(product)
})
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))