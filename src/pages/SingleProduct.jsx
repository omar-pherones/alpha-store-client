import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";
import useFetch from "../hooks/useFetch";

const SingleProduct = ({handleAddToCart}) => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const location= useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const { data: product } = useFetch(
        `http://localhost:1337/api/products?populate=*&[filters][id]=${id}`
    );
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };

    return (
        <div className="single-product-main-content my-5 md:my-[75px]">
            <div className="container mx-auto px-5 md:px-10">
                <div className="single-product-page flex flex-col md:flex-row lg:items-center gap-[10px]">
                    <div className="left bg-black/50 md:w-2/5 md:h-[600px]  flex items-center flex-shrink w-full ">
                        <div className="image w-full block">
                            <img
                                src={
                                    product.length > 0 &&
                                    product[0]?.attributes?.image?.data[0]
                                        ?.attributes?.url
                                }
                                alt= {product[0]?.attributes?.title}
                            />
                        </div>
                    </div>
                    <div className="right flex flex-col md:w-3/5 w-full pt-5 md:px-9">
                        <div className="single-product-name text-xl mb-5 md:text-2xl ">
                            {product[0]?.attributes?.title}
                        </div>
                        <div className="single-product-price text-xl mb-5">
                            {product[0]?.attributes?.price}
                        </div>
                        <div className="single-product-desc text-xs  text-[#6b6b6b] md:text-base ">
                            <p>{product[0]?.attributes?.desc}</p>
                        </div>
                        <div className="cart-button flex md:mt-[30px] mb-5">
                            <div className="quantity-buttons flex border-2 border-black/50 mr-[10px] h-[50px] w-fit">
                                <button
                                    className="text-lg w-10 flex items-center justify-center cursor-pointer outline-none text-[#6b6b6b] border-r-2 border-black/[0.2]"
                                    onClick={decrement}
                                >
                                    -
                                </button>
                                <span className="text-lg  flex items-center justify-center cursor-pointer text-[#6b6b6b] w-[60px]">
                                    {quantity}
                                </span>
                                <button
                                    className="text-lg w-10 flex items-center justify-center cursor-pointer outline-none text-[#6b6b6b] border-l-2 border-black/[0.2]"
                                    onClick={increment}
                                >
                                    {" "}
                                    +
                                </button>
                            </div>
                            <button onClick={()=> {
                                handleAddToCart(product[0],quantity);
                                setQuantity(1)
                            }} className="add-to-cart-button outline-0 border-0 h-[50px] w-[180px] flex items-center justify-center cursor-pointer text-base text-white bg-[#8e2de2] border-b-[3] border-[#6516aa] flex-grow md:flex-grow-0">
                                <FaCartPlus size={20} className="mr-5" />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider my-5 h-[2px] w-full bg-black/[0.1]"></span>
                        <div className="info-item flex flex-col gap-[5px]">
                            <span className="text-blod text-lg font-medium block">
                                Catagory:
                                <span className="mb-5">
                                    {" "}
                                    {
                                        product[0]?.attributes?.catagories
                                            ?.data[0]?.attributes?.title
                                    }
                                </span>
                            </span>
                            <span className=" text-blod text-lg font-medium flex items-center">
                                Share:
                                <span className="social-icons text-base font-normal cursor-pointer text-[#6b6b6b] flex ">
                                    <Link>
                                        <FaFacebookF
                                            size={16}
                                            className="mx-2"
                                        />
                                    </Link>
                                    <Link>
                                        <FaTwitter size={16} className="mx-2" />
                                    </Link>
                                    <Link>
                                        <FaInstagram
                                            size={16}
                                            className="mx-2"
                                        />
                                    </Link>
                                    <Link>
                                        <FaLinkedinIn
                                            size={16}
                                            className="mx-2"
                                        />
                                    </Link>
                                    <Link>
                                        <FaPinterest
                                            size={16}
                                            className="mx-2"
                                        />
                                    </Link>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts
                productId={id}
                catagoriesId={product[0]?.attributes?.catagories?.data[0]?.id}
            />
        </div>
    );
};

export default SingleProduct;
