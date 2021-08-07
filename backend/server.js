const express = require('express')
const app = express()

const products = require('./data/products.js')

const PORT = 5000

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
app.listen(PORT, console.log(`Server running on port ${PORT}`))