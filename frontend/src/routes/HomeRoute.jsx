import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'


const HomeRoute = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                setProducts(products)
            })
    }, [])


    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeRoute
