import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/NavImages/logo.png';
import { MdPhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer style={{ fontFamily: 'roboto' }} className='bg-teal-800 text-white pt-10 border-t border-gray-200 text-lg'>
            <div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-5'>

                {/* Brand Info */}
                <div className='lg:w-1/3 w-full'>
                    <img onClick={() => { navigate('/'), scrollTo(0, 0) }} src={logo} alt='Logo' className='w-40 h-30 mb-4 cursor-pointer' />
                    <p>
                        NextEra Logistic Logistics is a Bangladesh-based export-import and freight forwarding company, committed to providing smart, secure, and swift logistic solutions globally. From documentation to door-to-door delivery — we connect your trade with the world.
                    </p>
                </div>

                {/* Spacer */}
                <div className='w-0 lg:w-40 mt-10'></div>

                {/* Offices */}
                <div className='flex flex-col gap-3'>
                    <h4 className='font-semibold mb-2 text-2xl'>Our Offices</h4>

                    {/* Dhaka */}
                    <div>
                        <strong>Dhaka:</strong><br />
                        <div className='flex flex-col gap-2 mt-2'>

                            <p className='flex items-center gap-2 leading-snug'>
                                <span className='bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center'>
                                    <CiLocationOn className='text-xl' />
                                </span>
                                <span>1301/1 East Monipur, Begum Rokeya Sarani, Mirpur-10, Dhaka-1216</span>
                            </p>

                            <p className='flex items-center gap-2 leading-snug'>
                                <span className='bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center'>
                                    <MdPhone className='text-xl' />
                                </span>
                                <span>+8801610881122, +8801401791711, +880258053830</span>
                            </p>

                            <p className='flex items-center gap-2 leading-snug'>
                                <span className='bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center'>
                                    <FaRegEnvelope className='text-xl' />
                                </span>
                                <span>logistics.NextEra Logistic@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Hong Kong */}
                    <div className='mt-4 '>
                        <strong>HongKong:</strong><br />
                        <div className='flex flex-col gap-2'>
                            <p className='flex items-start gap-2 leading-snug mt-2'>
                                <span className='bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center'>
                                    <CiLocationOn className='text-xl' />
                                </span>
                                <span>303 Keen Hung Commercial Building, 80 Queen's Road East, Wanchai</span>
                            </p>
                            <p className='flex items-center gap-2 leading-snug'>
                                <span className='bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center'>
                                    <MdPhone className='text-xl' />
                                </span>
                                <span>+85255344975</span>
                            </p>

                            <p className='flex items-center gap-2 leading-snug'>
                                <span className='bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center'>
                                    <FaRegEnvelope className='text-xl' />
                                </span>
                                <span>logistics.NextEra Logistic@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className='mt-4'>
                        <h2 className='text-xl'>Follow Us</h2>
                        <div className='flex gap-3 mt-3'>
                            <a href='https://www.facebook.com/eximport' className='bg-[#3b5998] text-white w-10 h-10 flex items-center justify-center rounded-full'>
                                <FaFacebookF />
                            </a>
                            <a href='https://x.com/eximport' className='bg-[#1DA1F2] text-white w-10 h-10 flex items-center justify-center rounded-full'>
                                <FaTwitter />
                            </a>
                            <a href='https://www.youtube.com/eximport' className='bg-[#FF0000] text-white w-10 h-10 flex items-center justify-center rounded-full'>
                                <FaYoutube />
                            </a>
                            <a href='https://www.linkedin.com/eximport' className='bg-[#0077b5] text-white w-10 h-10 flex items-center justify-center rounded-full'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Strip */}
            <div className='border-t mt-10 py-4 px-6 text-center text-gray-200'>
                <div className='flex flex-col md:flex-row px-4 md:px-20 justify-between items-center max-w-7xl mx-auto gap-4'>
                    <p>&copy; {new Date().getFullYear()}NextEra Logistic. All rights reserved.</p>
                    <p>Developed and Designed by <a className='text-green-400 hover:underline' href='https://www.nextitbd.com/'>Next IT Solution</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
