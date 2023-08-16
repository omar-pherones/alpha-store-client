import { MdClose } from 'react-icons/md';
import prod from '../assests/products/headphone-prod-2.webp';
import { useState } from 'react';
const CartItem = ({ cartItems,handleRemoveFromCart,handleCartProductQuantity }) => {
    return (
        <div className="cart-products flex-grow">
            {cartItems.map((product) => (
                <div
                    key={product.id}
                    className="cart-product px-5 p-[15px] flex  gap-5 hover:bg-black/10 hover:cursor-pointer duration-300"
                >
                    <img
                        src={
                            product?.attributes?.image?.data[0]?.attributes?.url
                        }
                        alt={product?.attributes?.title}
                        className=" img-container bg-black/50 w-[60px] h-[60px] flex-shrink-0"
                    />
                    <div className="product-details overflow-hidden relative">
                        <span className="product-name truncate text-base mb-[10px] font-medium block pr-6">
                            {product?.attributes?.title}
                        </span>
                        <MdClose className="close-btn absolute top-0 right-0  cursor-pointer" onClick={()=>handleRemoveFromCart(product)}/>
                        <div className="quantity-buttons flex border border-black/50 mb-2 h-[30px] w-fit">
                            <span
                            onClick={()=> handleCartProductQuantity('dec', product)}
                                className="text-lg w-[30px] flex items-center justify-center cursor-pointer text-[#6b6b6b] border border-r-[1px] border-black/[0.2]"
                            >
                                -
                            </span>
                            <span className="text-xs  flex items-center justify-center cursor-pointer text-[#6b6b6b] w-[40px]">
                                {product?.attributes?.quantity}
                            </span>
                            <span
                               onClick={()=> handleCartProductQuantity('inc', product)}
                                className="text-lg w-10 flex items-center justify-center cursor-pointer text-[#6b6b6b] border border-r-[1px] border-black/[0.2]"
                            >
                                +
                            </span>
                        </div>
                        <div className="text flex items-center gap-[5px] font-semibold">
                            <span>{product?.attributes?.quantity}</span>
                            <span>x</span>
                            <span className="highlight text-[#8e2de2]">
                                &#8377;{product?.attributes?.price *product?.attributes?.quantity}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
