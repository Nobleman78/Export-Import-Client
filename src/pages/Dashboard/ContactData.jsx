import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../Utility/Hooks/UseAxiosSecure';

const ContactData = () => {
    const axiosSecure = UseAxiosSecure();
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        axiosSecure.get('/contactData')
            .then(res => {
                setContactData(res.data);
            })
            .catch(err => {
                console.error('Error fetching contact data:', err);
            });
    }, [axiosSecure]);

    return (
        <div className="p-4 sm:p-6 md:p-8"> {/* Responsive padding */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Submissions</h2>

            {contactData.length > 0 ? (
                <>
                    {/* Desktop / tablet view */}
                    <div className="hidden md:block overflow-x-auto border border-gray-300 rounded max-h-[500px]"> {/* Hidden on mobile, block on md and up */}
                        <table className="min-w-full border-collapse text-sm border border-gray-300">
                            <thead className="bg-gray-100 sticky top-0"> {/* Sticky header for scrolling */}
                                <tr>
                                    <th className="border px-4 py-2 bg-gray-100">#</th>
                                    <th className="border px-4 py-2 bg-gray-100">First Name</th>
                                    <th className="border px-4 py-2 bg-gray-100">Last Name</th>
                                    <th className="border px-4 py-2 bg-gray-100">Email</th>
                                    <th className="border px-4 py-2 bg-gray-100">Phone Number</th>
                                    <th className="border px-4 py-2 bg-gray-100">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactData.map((item, index) => (
                                    <tr key={item._id || index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{index + 1}</td>
                                        <td className="border px-4 py-2">{item.FirstName}</td>
                                        <td className="border px-4 py-2">{item.lastName}</td>
                                        <td className="border px-4 py-2">{item.email}</td>
                                        <td className="border px-4 py-2">{item.number}</td>
                                        <td className="border px-4 py-2">{item.message}</td>
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
                                    <span>{item.FirstName} {item.lastName}</span> {/* Display full name */}
                                </div>
                                <div className="text-xs space-y-1">
                                    <p><strong>Email:</strong> {item.email}</p>
                                    <p><strong>Phone:</strong> {item.number}</p>
                                    <p><strong>Message:</strong> {item.message}</p>
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

export default ContactData;