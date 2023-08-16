import BannerImage from '../assests/banner-img.png';
const Banner = () => {
    return (
        <div className="hero-banner py-10 relative md:h-[calc(100%-70px)]">
            <div className="container mx-auto h-full flex justify-end items-center flex-col-reverse md:flex-row  relative">
                <div className="text-content text-white text-center flex flex-col items-center md:absolute md:left-[50px] md:top-2/4 md:-translate-y-2/4 2xl:left-0">
                    <h1 className="text-7xl font-bold text-white mb-5 md:text-[180px]">
                        SALES
                    </h1>
                    <p className="max-w-80 text-xs leading-5 mb-5 md:max-w-lg md:text-lg md:leading-6 md:mb-10">
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas flex justify-center gap-5">
                        <div className="banner-cta uppercase text-xs font-medium border-2 border-white  px-7 py-4  duration-300 cursor-pointer hover:opacity-[0.6]">
                            Read More
                        </div>
                        <div className="banner-cta v2 banner-cta uppercase text-xs font-medium  border-2 border-white px-7 py-4  duration-300 cursor-pointer bg-white text-black hover:opacity-[0.6]">
                            Shop Now
                        </div>
                    </div>
                </div>
                <img
                    className="banner-img relative z-10 w-[200px] mt-5 md:w-[500px] md:mr-[60px] md:mt-[50px] md:mb-0 2xl:w-[600px] 2xl:mr-0 2xl:mt-0 "
                    src={BannerImage}
                />
            </div>
        </div>
    );
};

export default Banner;
