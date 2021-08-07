import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomeRoute from './routes/HomeRoute'
import ProductRoute from './routes/ProductRoute'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';


const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeRoute} exact />
                    <Route path="/product/:id" component={ProductRoute} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
