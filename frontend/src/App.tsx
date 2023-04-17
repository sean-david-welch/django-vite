import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {
    return (
        <div className="App">
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/:productId" element={<ProductPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </CartProvider>
        </div>
    );
}

export default App;
