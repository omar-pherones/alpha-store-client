import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from '../pages/Cart';
import Search from './Search';

const Navbar = ({
    cartItems,
    handleRemoveFromCart,
    handleCartProductQuantity,
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);
    }, [cartItems]);

    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    // sticky navbar
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    // Show cart
    const handleShowCart = () => {
        setShowCart(true);
        document.body.style.overflow = 'hidden';
    };
    return (
        <>
            <nav
                className={`nav border text-white border-black/[0.1] w-full ${
                    scrolled ? 'sticky-header' : ''
                }`}
            >
                <div className="container mx-auto flex items-center justify-between h-[50px] md:h-[70px] px-5 md:px-10">
                    <ul className="left hidden md:flex gap-6 ">
                        <li>
                            <Link
                                to="/"
                                className="text-sm font-medium uppercase hover:opacity-[0.6]"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-sm font-medium uppercase hover:opacity-[0.6]">
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-sm font-medium uppercase hover:opacity-[0.6]"
                            >
                                Categories
                            </Link>
                        </li>
                    </ul>
                    <div className="center text-xl font-bold uppercase md:text-3xl ">
                        <Link onClick={() => navigate('/')}>
                            Alpha<span className="tronics">Store.</span>
                        </Link>
                    </div>
                    <div className="right flex gap-5 items-center md:gap-6">
                        <TbSearch
                            className="text-xl cursor-pointer hover:opacity-[0.6] md:text-xl"
                            onClick={() => setSearchModal(true)}
                        />
                        <AiOutlineHeart className="text-xl cursor-pointer hover:opacity-[0.6] md:text-xl" />
                        <span
                            className="cart-icon relative "
                            onClick={() => handleShowCart()}
                        >
                            <CgShoppingCart className=" text-xl cursor-pointer hover:opacity-[0.6] md:text-xl" />
                            {cartCount > 0 && (
                                <span className="cart-count absolute -top-2 -right-3 text-xs w-5 text-center">
                                    {cartCount}
                                </span>
                            )}
                        </span>
                    </div>
                </div>
            </nav>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && (
                <Cart
                    setShowCart={setShowCart}
                    cartItems={cartItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleCartProductQuantity={handleCartProductQuantity}
                />
            )}
        </>
    );
};

export default Navbar;
