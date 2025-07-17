import { FaPhone } from 'react-icons/fa';

const CallButton = () => {
    return (
        <div className="fixed bottom-40 right-6 z-50">
            <a href="tel:+8801401791719" className="flex items-center gap-2 bg-[#1e928e] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#176b68] transition-all text-sm font-semibold">    <FaPhone className="text-white" />    <span>Call Us: +8801401791719</span>
            </a>
        </div>
    );
};

export default CallButton;
