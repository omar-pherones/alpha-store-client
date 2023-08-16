import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
const Cart = ({
    setShowCart,
    cartItems,
    handleRemoveFromCart,
    handleCartProductQuantity,
}) => {
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);
    const handleCloseCart = () => {
        setShowCart(false);
        document.body.style.overflow = 'auto';
    };
    return (
        <div className="cart-panel fixed top-0 left-0 flex justify-end w-full h-full z-[99]   ">
            <div className="overlay-layer  absolute top-0 left-0 w-full h-full bg-black/50"></div>
            <div className="cart-content w-full h-full bg-white relative z-[1] flex flex-col slideCartWindow md:w-[340px]">
                <div className="card-header flex items-center justify-end py-5 px-[15px] border border-b-black/[0.1]">
                    <span className="heading text-xl font-bold uppercase flex-grow">
                        Shopping Cart
                    </span>
                    <span
                        className="close-btn flex items-center gap-[5px] cursor-pointer hover:opacity-50 "
                        onClick={() => handleCloseCart()}
                    >
                        <MdClose className="text-lg" />
                        <span className="text uppercase text-xs">close</span>
                    </span>
                </div>
                {cartItems?.length === 0 && (
                    <div className="empty-cart flex flex-col items-center gap-5 mt-[100px] ">
                        <BsCartX className="text-[120px] opacity-[0.1]" />
                        <span>No products in the cart.</span>
                        <button
                            onClick={() => navigate('/')}
                            className="return-cta outline-0 border-[3] border-b-[#6516aa] h-10 w-[150px] flex items-center justify-center cursor-pointer text-xs text-white bg-[#8e2de2]"
                        >
                            RETURN TO SHOP
                        </button>
                    </div>
                )}
                {cartItems?.length > 0 && (
                    <>
                        <CartItem
                            cartItems={cartItems}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleCartProductQuantity={
                                handleCartProductQuantity
                            }
                        />
                        <div className="cart-footer border border-b-black/[0.1]">
                            <div className="subtotal py-5 px-[15px] border border-b-black/[0.1] flex justify-between">
                                <span className="text mb-0 text-xl font-bold uppercase">
                                    Subtotal:
                                </span>
                                <span className="text total text mb-0 text-xl font-bold uppercase text-[#8e2de2]">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button py-5 px-[15px]">
                                <button className="checkout-cta outline bordr-0 h-[50px] w-full flex items-center justify-center cursor-pointer text-base text-white bg-[#8e2de2] uppercase">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
