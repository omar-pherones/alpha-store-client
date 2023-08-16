import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catagory from './pages/Catagory';
import SingleProduct from './pages/SingleProduct';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
const App = () => {
    const [catagories, setCatagories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('products');
        return localData ? JSON.parse(localData) : [];
    });
    // Getting APi from catagories
    const getCatagoriesApi = async (url) => {
        try {
            setLoading(true);
            const res = await fetch(url);
            if (!res.ok) throw new Error('somthing wont wrong');
            const data = await res.json();
            if (data.result === 0) throw new Error('somthing wont wrong');
            setCatagories(data?.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    };
    // Getting APi from Products
    const getProductsApi = async (url) => {
        try {
            setLoading(true);
            const res = await fetch(url);
            if (!res.ok) throw new Error('somthing wont wrong');
            const data = await res.json();
            if (data.result === 0) throw new Error('somthing wont wrong');
            setProducts(data?.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        getCatagoriesApi('http://localhost:1337/api/catagories?populate=*');
        getProductsApi('http://localhost:1337/api/products?populate=*');
    }, []);

    // Add to cart Item
    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id);
        setCartItems(items);
    };
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === 'inc') {
            items[index].attributes.quantity += 1;
        } else if (type === 'dec') {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cartItems));
    }, [cartItems]);
    return (
        <BrowserRouter>
            <Navbar
                cartItems={cartItems}
                handleRemoveFromCart={handleRemoveFromCart}
                handleCartProductQuantity={handleCartProductQuantity}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            catagories={catagories}
                            loading={loading}
                            error={error}
                            products={products}
                        />
                    }
                />
                <Route path="/category/:id" element={<Catagory />} />
                <Route
                    path="/singleproduct/:id"
                    element={
                        <SingleProduct handleAddToCart={handleAddToCart} />
                    }
                />
            </Routes>
            <Newsletter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
