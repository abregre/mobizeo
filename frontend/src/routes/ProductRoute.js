import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductRoute = ({ match }) => {
    const product = products.find(product => product._id === match.params.id)
    return (
        <>
            <Link to={'/'} className="btn btn-dark my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6} >
                    <Image src={product.image} alt={product.name} className="img-fluid" />
                </Col>
                <Col md={3} >
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h4>{product.name}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} starColor="red" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button type="button" disabled={product.countInStock <= 0}>
                                        Add To Cart
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductRoute
