import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/LoginPage';
import Success from './pages/Success';
import ProductPage from './pages/ProductPage';

function App() {
    return (
        <div className="App">
            <Router>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment-success" element={<Success />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/:productId" element={<ProductPage />} />
                    </Routes>
                </CartProvider>
            </Router>
        </div>
    );
}

export default App;
