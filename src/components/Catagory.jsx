import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
const Category = ({ catagories, loading, error }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category w-full  my-10 md:my-[50px]">
            <div className="container categories mx-auto px-5 md:px-10 flex gap-[10px] justify-center ">
                {loading && (
                    <p className=" text-rose-300  lg:text-4xl">
                        <CgSpinner className="animate-spin" size={25} />
                    </p>
                )}
                {catagories?.map((item) => (
                    <div
                        key={item.id}
                        className="category w-[calc(50% - 5px)] md:w-[calc(25% - 10px)] bg-black cursor-pointer overflow-hidden group-hover:scale-[1.2]"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={`${
                                item?.attributes?.image?.data.at(0)?.attributes
                                    ?.url
                            }`}
                            className="w-full block duration-500 hover:scale-[1.2]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
