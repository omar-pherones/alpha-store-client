import { useParams } from 'react-router-dom';
import Products from '../components/Products';
import useFetch from '../hooks/useFetch';
const Catagory = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `http://localhost:1337/api/products?populate=*&[filters][catagories]=${id}`
    );

    return (
        <div className="catagory-container container  mx-auto  px-5 md:px-10  my-[30px] md:my-[75px]">
            <div className="category-title section-heading relative text-2xl md:text-[34px]">
                {data.length > 0 &&
                    data[0]?.attributes?.catagories?.data[0]?.attributes?.title}
            </div>
            <Products innerPage={true} products={data} />
        </div>
    );
};

export default Catagory;
