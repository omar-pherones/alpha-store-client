import useFetch from "../hooks/useFetch";
import Products from "./Products";

const RelatedProducts = ({ productId, catagoriesId }) => {
    const { data } = useFetch(
        `http://localhost:1337/api/products?populate=*&filters[id][$ne]=${productId}&filters[catagories][id]=${catagoriesId}&pagination[start]=0&pagination[limit]=4`
    );
    return (
        <div className="related-products">
            <Products headingText="Related Product" products={data} />
        </div>
    );
};

export default RelatedProducts;
