import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Utility/Hooks/UseAxiosSecure';

const RequestData = () => {
    const axiosSecure = UseAxiosSecure();
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        axiosSecure.get('/requestData')
            .then(res => {
                setContactData(res.data);
            })
            .catch(err => {
                console.error('Error fetching contact data:', err);
            });
    }, [axiosSecure]);

    return (
        <div className="p-4 sm:p-6 md:p-8"> {/* Responsive padding */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Request Submissions</h2>

            {contactData.length > 0 ? (
                <>
                    {/* Desktop / tablet view */}
                    <div className="hidden md:block overflow-x-auto border border-gray-300 rounded max-h-[500px]"> {/* Hidden on mobile, block on md and up */}
                        <table className="min-w-full border-collapse text-sm border border-gray-300">
                            <thead className="bg-gray-100 sticky top-0">
                                <tr>
                                    <th className="border px-4 py-2 bg-gray-100">#</th>
                                    <th className="border px-4 py-2 bg-gray-100">Name</th>
                                    <th className="border px-4 py-2 bg-gray-100">Phone</th>
                                    <th className="border px-4 py-2 bg-gray-100">Subject</th>
                                    <th className="border px-4 py-2 bg-gray-100">Pickup City</th>
                                    <th className="border px-4 py-2 bg-gray-100">Delivery City</th>
                                    <th className="border px-4 py-2 bg-gray-100">Freight Type</th>
                                    <th className="border px-4 py-2 bg-gray-100">Incoterms</th>
                                    <th className="border px-4 py-2 bg-gray-100">Weight</th>
                                    <th className="border px-4 py-2 bg-gray-100">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactData.map((item, index) => (
                                    <tr key={item._id || index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{index + 1}</td>
                                        <td className="border px-4 py-2">{item.name}</td>
                                        <td className="border px-4 py-2">{item.phone}</td>
                                        <td className="border px-4 py-2">{item.subject}</td>
                                        <td className="border px-4 py-2">{item.pickupCity}</td>
                                        <td className="border px-4 py-2">{item.deliveryCity}</td>
                                        <td className="border px-4 py-2">{item.freightType}</td>
                                        <td className="border px-4 py-2">{item.incoterms}</td>
                                        <td className="border px-4 py-2">{item.weight}</td>
                                        <td className="border px-4 py-2">{item.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile view */}
                    <div className="md:hidden space-y-4 max-h-[500px] overflow-y-auto"> {/* Hidden on md and up, block on mobile */}
                        {contactData.map((item, index) => (
                            <div key={item._id || index} className="border border-gray-300 rounded p-3 shadow-sm">
                                <div className="flex justify-between text-xs font-semibold mb-2">
                                    <span>#{index + 1}</span>
                                    <span>{item.name}</span>
                                </div>
                                <div className="text-xs space-y-1">
                                    <p><strong>Phone:</strong> {item.phone}</p>
                                    <p><strong>Subject:</strong> {item.subject}</p>
                                    <p><strong>Pickup City:</strong> {item.pickupCity}</p>
                                    <p><strong>Delivery City:</strong> {item.deliveryCity}</p>
                                    <p><strong>Freight Type:</strong> {item.freightType}</p>
                                    <p><strong>Incoterms:</strong> {item.incoterms}</p>
                                    <p><strong>Weight:</strong> {item.weight}</p>
                                    <p><strong>Notes:</strong> {item.notes}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No contact data found.</p>
            )}
        </div>
    );
};

export default RequestData;