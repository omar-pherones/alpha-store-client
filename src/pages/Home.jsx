import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Category from '../components/Catagory';
import Products from '../components/Products';
import { useEffect } from 'react';

const Home = ({ catagories, loading, error, products }) => {
    const location= useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <Banner />
            <Category catagories={catagories} loading={loading} error={error} />
            <Products
                headingText="Popular Product"
                products={products}
                loading={loading}
                error={error}
            />
        </>
    );
};

export default Home;
