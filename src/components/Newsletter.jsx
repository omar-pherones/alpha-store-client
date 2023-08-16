import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
const Newsletter = () => {
    return (
        <div className="newsletter-section  h-[400px] flex items-center">
            <div className="container mx-auto  flex items-center flex-col text-center">
                <span className="small-text  uppercase text-black/50 text-2xl mb-3">
                    Newsletter
                </span>
                <span className="big-text mb-7 text-xl leading-7 font-medium  md:text-3xl">
                    Sign up for latest updates and offers
                </span>
                <div className="form flex gap-5 mb-[10px]">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-[200px] h-10 rounded-none border-black/5 px-3 text-base outline-none md:w-[300px]"
                    />
                    <button className="border-0 outline-none h-10 w-[100px] flex items-center text-base text-white bg-purple-700  border-b-[3] border-purple-500 py-5 px-7 rounded-sm  text-center hover:bg-purple-700/75 duration-300 md:w-[120px]">
                        Subscribe
                    </button>
                </div>
                <span className="text mb-5 text-xs text-black/50">
                    Will be used in accordance with our Privacy Policy.
                </span>
                <span className="social-icons flex gap-3">
                    <Link className="icon w-8 h-8 rounded-full bg-black/80 text-white flex justify-center items-center">
                        <FaLinkedinIn size={14} />
                    </Link>
                    <Link className="icon w-8 h-8 rounded-full bg-black/80 text-white flex justify-center items-center">
                        <FaFacebookF size={14} />
                    </Link>
                    <Link className="icon w-8 h-8 rounded-full bg-black/80 text-white flex justify-center items-center">
                        <FaTwitter size={14} />
                    </Link>
                    <Link className="icon w-8 h-8 rounded-full bg-black/80 text-white flex justify-center items-center">
                        <FaInstagram size={14} />
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
