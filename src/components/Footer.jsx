import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../assests/payments.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto pt-12 px-5 md:pt-12 ">
                <div className="footer-top-wraper flex md:justify-between flex-wrap gap-5 pb-5">
                    <div className="col max-w-[300px] md:w-auto">
                        <div className="title mb-5 text-xl">About</div>
                        <div className="text text-black/75 font-xs">
                            Voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo eaque ipsa quae ab illo.
                        </div>
                    </div>
                    <div className="col max-w-[300px] md:w-auto">
                        <div className="title mb-5 text-xl">Contact</div>
                        <div className="c-item flex mb-3">
                            <FaLocationArrow className="text-xs flex-shrink-0 mr-3 mt-1 text-black/75" />
                            <div className="text text-black/75 font-xs ">
                                Kayaloram Rd, Punnamada, Kottankulangara,
                                Alappuzha, Kerala, 688006
                            </div>
                        </div>
                        <div className="c-item flex mb-3">
                            <FaMobileAlt className="text-xs flex-shrink-0 mr-3 mt-1 text-black/75" />
                            <div className="text text-black/75 font-xs">
                                Phone: 0471 272 0261
                            </div>
                        </div>
                        <div className="c-item flex mb-3">
                            <FaEnvelope className="text-xs flex-shrink-0 mr-3 mt-1 text-black/75" />
                            <div className="text text-black/75 font-xs">
                                Email: store@alpha.com
                            </div>
                        </div>
                    </div>
                    <div className="col max-w-[150px] md:w-auto">
                        <div className="title mb-5 text-xl">Categories</div>
                        <span className="text text-black/75 font-xs block mb-3 cursor-pointer">
                            Headphones
                        </span>
                        <span className="text text-black/75 font-xs block mb-3 cursor-pointer">
                            Smart Watches
                        </span>
                        <span className="text text-black/75 font-xs block mb-3 cursor-pointer">
                            Bluetooth Speakers
                        </span>
                        <span className="text text-black/75 font-xs block mb-3 cursor-pointer">
                            Wireless Earbuds
                        </span>
                        <span className="text text-black/75 font-xs block mb-3 cursor-pointer">
                            Home Theatre
                        </span>
                        <span className="text text-black/75 font-xs block mb-3 cursor-pointer">
                            Projectors
                        </span>
                    </div>
                    <div className="col max-w-[300px] md:w-auto">
                        <div className="title mb-5 text-xl">Pages</div>
                        <span className="text  text-black/75 font-xs block mb-3 cursor-pointer">
                            Home
                        </span>
                        <span className="text  text-black/75 font-xs block mb-3 cursor-pointer">
                            About
                        </span>
                        <span className="text  text-black/75 font-xs block mb-3 cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="text  text-black/75 font-xs block mb-3 cursor-pointer">
                            Returns
                        </span>
                        <span className="text  text-black/75 font-xs block mb-3 cursor-pointer">
                            Terms & Conditions
                        </span>
                        <span className="text  text-black/75 font-xs">
                            Contact Us
                        </span>
                    </div>
                </div>
                <div className="bottom-bar border-t border-black/[0.1]">
                    <div className="bottom-bar-content p-5 flex items-center flex-col text-center gap-3 md:p-0 md:h-[60px] md:flex-row md:justify-between md:text-left">
                        <span className="text text-xs text-black/50">
                            © {new Date().getFullYear()} CREATED BY OMAR FARUK.
                            ALL RIGHTS RESERVED.
                        </span>
                        <img src={Payment} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
