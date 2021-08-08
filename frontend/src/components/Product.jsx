import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded card-container">
            <Link to={`/product/${product._id}`} >
                <Card.Img src={product.image} variant="top" className="" />
            </Link>
            <Card.Body>
                <a href={`/product/${product._id}`} className="text-decoration-none">
                    <Card.Title as="div">
                        <strong >{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} starColor="red" />
                    </div>
                </Card.Text>

                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
