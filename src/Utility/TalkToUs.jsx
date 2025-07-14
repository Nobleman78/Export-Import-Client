import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const TalkToUs = () => {
    return (
        <div className="fixed bottom-20 right-6 z-50">
            <a
                href="https://wa.me/880177879978" // your WhatsApp number with country code
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all"
            >
                <FaWhatsapp size={18} />
                <span>Talk to Us</span>
            </a>
        </div>
    );
};

export default TalkToUs;
