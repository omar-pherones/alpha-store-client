import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import IMG from '../assests/products/earbuds-prod-1.webp';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
const Search = ({ setSearchModal }) => {
    const [searchQuery, setSeachQuery] = useState('');
    const navigate = useNavigate();
    const searchHandaler = (e) => {
        setSeachQuery(e.target.value);
    };
    let { data } = useFetch(
        `http://localhost:1337/api/products?populate=*&filters[title][$contains]=${searchQuery}`
    );
    if (!searchQuery.length) {
        data = null;
    }
    return (
        <div className="search-modal fixed w-full h-full  top-0 left-0 bg-white z-[999] search-modal-show ">
            <div className="form-field w-full flex justify-center px-3 py-[50px] border border-b border-black/[0.1] md:px-0 md:py-5">
                <input
                    value={searchQuery}
                    onChange={searchHandaler}
                    type="text"
                    placeholder="Seacrh for products"
                    className="w-full max-w-[1200px] h-[50px] text-center text-lg font-medium text-[#212121] outline-none border-none  md:h-[80px] md:text-5xl "
                />
                <MdClose
                    onClick={() => setSearchModal(false)}
                    className="absolute text-2xl right-5 top-14 translate-y-[-50%] cursor-pointer md:right-10 md:text-5xl"
                />
            </div>
            <div className="search-result-content max-w-[calc(100%-20px)] mx-auto md:max-w-[800px]">
                {!data?.length && (
                    <div className="start-msg text-center mt-5 text-black/50">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results h-[calc(100vh-110px)] overflow-auto my-5 md:h-[calc(100vh-160px)]">
                    {data?.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => {
                                navigate('/singleproduct/' + item.id);
                                setSearchModal(false);
                            }}
                            className="search-result-item flex items-center gap-[10px] py-[10px] border-b border-black/[0.1]]  cursor-pointer"
                        >
                            <div className="image-container bg-black/5 w-[60px] h-[60px] flex-shrink-0">
                                <img
                                    src={
                                        item?.attributes?.image?.data.at(0)
                                            ?.attributes?.url
                                    }
                                    className="block w-full h-full"
                                />
                            </div>
                            <div className="prod-details overflow-hidden">
                                <span className="name truncate text-base mb-[10px] font-medium block">
                                    {item?.attributes?.title}
                                </span>
                                <span className="desc text-sm block truncate text-black/[0.5]">
                                    {item?.attributes?.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
