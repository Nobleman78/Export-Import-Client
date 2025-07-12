import React from 'react';

const Export = () => {
    return (
        <div className="max-w-8xl mx-auto px-20 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Export Service</h1>
            <p className="text-gray-600 mb-10">
                Here’s how we assist you throughout your export journey:
            </p>

            <ul className="space-y-6 text-gray-700">
                <li>📑 <strong>Order Placement:</strong> Streamlined interface for placing and managing buyer orders.</li>
                <li>📦 <strong>Inventory Handling:</strong> Track available stock, set dispatch rules, manage warehousing.</li>
                <li>🚚 <strong>Transportation & Logistics:</strong> Integration with freight and shipping partners.</li>
                <li>🧾 <strong>Documentation & Compliance:</strong> Generate invoices, certificates, customs docs, HS code.</li>
                <li>💰 <strong>Payment & Escrow:</strong> Secure payment gateway, milestone-based release, multi-currency support.</li>
            </ul>
        </div>
    );
};

export default Export;
