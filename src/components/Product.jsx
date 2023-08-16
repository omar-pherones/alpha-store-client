import { useNavigate } from 'react-router-dom';

const Product = ({ product, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card w-[calc(50%-5px)] mb-5 cursor-pointer md:w-[calc(25%-15px)] group-hover:scale-[1.2]"
            onClick={() => navigate(`/singleproduct/${id}`)}
        >
            <div className="product-thumbnail w-full h-[180px] bg-black/50 mb-[10px] p-6  flex items-center md:h-[350px]">
                <img
                    src={
                        product?.attributes?.image?.data.at(0)?.attributes?.url
                    }
                    alt=""
                    className="product-image duration-500 block hover:scale-[1.2]"
                />
            </div>
            <div className="product-details">
                <div className="product-name text-xs truncate md:text-base mb-[10px]">
                    {product?.attributes?.title}
                </div>
                <div className="product-price text-sm md:text-2xl">
                    &#8377;{product?.attributes?.price}
                </div>
            </div>
        </div>
    );
};

export default Product;
