import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/NavImages/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-teal-800 text-white pt-10 border-t border-gray-200 text-lg'>
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>

                {/* Brand Info */}
                <div>
                    <img src={logo} alt='Logo' className='w-28 mb-4' />
                    <p>
                        We provide comprehensive import-export solutions tailored to your business needs.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h4 className='font-semibold mb-2 text-xl '>Services</h4>
                    <ul className='space-y-1'>
                        <Link to='/services/import' onClick={() => scrollTo(0, 0)}><li className='hover:text-green-500'>Import Solutions</li></Link>
                        <Link to='/services/export' onClick={() => scrollTo(0, 0)}><li className='hover:text-green-500'>Export Solutions</li></Link>
                        <Link><li>Freight Forwarding</li></Link>

                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className='font-semibold mb-2 text-xl'>Contact Us</h4>
                    <p>Email: <a href='mailto:ask@yourdomain.com' className='text-white-600'>ask@yourdomain.com</a></p>
                    <p>Phone: +8801610881122, +8801401791711 </p>
                    <p>TelePhone: +880258053830</p>
                    <p>WhatsApp: <a href='https://wa.me/8801401791719' // your WhatsApp number with country code
                        target='_blank'
                        rel='noopener noreferrer' className='text-blue-200 underline'>+8801401791719</a></p>
                    <div className='flex gap-3 mt-3'>
                        <a href='https://www.facebook.com/eximport' className='bg-[#3b5998] text-white p-2 rounded-full'><FaFacebookF /></a>
                        <a href='https://x.com/eximport' className='bg-[#1DA1F2] text-white p-2 rounded-full'><FaTwitter /></a>
                        {/* <a href='www.facebook.com/eximport' className='bg-[#E1306C] text-white p-2 rounded-full'><FaInstagram /></a> */}
                        <a href='https://www.youtube.com/eximport' className='bg-[#FF0000] text-white p-2 rounded-full'><FaYoutube /></a>
                        <a href='https://www.linkedin.com/eximport' className='bg-[#0077b5] text-white p-2 rounded-full'><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Offices */}
                <div className='flex flex-col gap-3'>
                    <h4 className='font-semibold mb-2 text-xl'>Our Offices</h4>
                    <p>
                        <strong>Dhaka:</strong><br />
                        <p className='mt-1'>  Address: 1301/1 East Monipur, Begum Rokeya Sarani, Mirpur-10, Dhaka-1216</p>
                    </p>
                    <p>
                        <strong>HongKong:</strong><br />
                        <p className='mt-1'>  Address: 303 Keen Hung Commercial Building 80 Queen's Road East Wanchai,Wan Chai District</p>
                    </p>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className='border-t mt-10 py-4 px-6 text-center text-gray-200'>
                <div className='flex flex-col md:flex-row px-20 justify-between items-center max-w-7xl mx-auto gap-4'>
                    <p>&copy; {new Date().getFullYear()} EximPort. All rights reserved.</p>
                    <p>Developed and Design by <a className='text-green-400' href='https://www.nextitbd.com/'>Next IT Solution</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
