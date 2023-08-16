import { CgSpinner } from "react-icons/cg";
import Product from "./Product";

const Products = ({ products, innerPage, headingText, loading }) => {
    return (
        <div className="products-container container mx-auto px-5 md:px-10 my-[50px] md:my-[75px] ">
            {!innerPage && (
                <div className="section-heading relative mb-5 text-xl font-medium uppercase md:mb-9 md:text-2xl">
                    {headingText}
                </div>
            )}
            {loading && (
                <p className=" text-rose-300  lg:text-4xl block text-center">
                    <span className="flex justify-center ">
                        {" "}
                        <CgSpinner className="animate-spin block " size={25} />
                    </span>
                </p>
            )}
            <div className="products flex flex-wrap gap-[10px] md:gap-5">
                {products?.map((product) => (
                    <Product
                        product={product}
                        key={product.id}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
