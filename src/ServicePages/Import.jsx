import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Import = () => {
    const navigate = useNavigate()
    return (
        <div className="max-w-8xl mx-auto px-20 py-12" style={{ fontFamily: 'roboto' }}>
            <Helmet>
                <title>Import | Eximport</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Import Service</h1>
            <p className="text-gray-600 mb-10">
                Here’s how we assist you throughout your import journey:
            </p>
            <ul className="space-y-6 text-gray-700" >
                <li>📑 <strong>Order Placement:</strong> Streamlined interface for placing and managing buyer orders.</li>
                <li>📦 <strong>Inventory Handling:</strong> Track available stock, set dispatch rules, manage warehousing.</li>
                <li>🚚 <strong>Transportation & Logistics:</strong> Integration with freight and shipping partners.</li>
                <li>🧾 <strong>Documentation & Compliance:</strong> Generate invoices, certificates, customs docs, HS code.</li>
                <li>💰 <strong>Payment & Escrow:</strong> Secure payment gateway, milestone-based release, multi-currency support.</li>
            </ul>
            <button onClick={() => {navigate('/services/export/request'),scrollTo(0,0)}} className='mt-10 bg-[#1e928e] px-8 py-3 rounded-lg text-white font-semibold cursor-pointer hover:bg-[#305857] transition duration-400'>Request For Service</button>
        </div>
    );
};

export default Import;
